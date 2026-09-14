// Run: node scripts/lastmod.test.mjs
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { makeLastmod } from '../src/lib/lastmod.mjs';

const stub = (shallow, logOut) => (args) => {
  if (args[0] === 'rev-parse') {
    if (shallow instanceof Error) throw shallow;
    return shallow;
  }
  if (logOut instanceof Error) throw logOut;
  return logOut;
};

// A: full history -> real per-file commit date
assert.equal(makeLastmod(stub('false', '2026-08-29'))('src/pages/index.astro'), '2026-08-29');

// B: shallow -> null even though git log answers with a valid-looking date
assert.equal(makeLastmod(stub('true', '2026-09-14'))('src/pages/index.astro'), null);

// C: git unavailable -> null
assert.equal(makeLastmod(stub(new Error('ENOENT'), '2026-09-14'))('src/pages/index.astro'), null);

// D: git log errors on a full repo -> null
assert.equal(makeLastmod(stub('false', new Error('fatal')))('src/pages/index.astro'), null);

// E: empty / unparseable output -> null
assert.equal(makeLastmod(stub('false', ''))('src/pages/index.astro'), null);
assert.equal(makeLastmod(stub('false', 'not-a-date'))('src/pages/index.astro'), null);

// rev-parse is asked once per instance, not once per file
let revParseCalls = 0;
const counting = makeLastmod((args) => {
  if (args[0] === 'rev-parse') { revParseCalls++; return 'false'; }
  return '2026-09-06';
});
counting('a.astro'); counting('b.astro'); counting('c.astro');
assert.equal(revParseCalls, 1);

// Real git, no stub: this repo is a full clone, so dates must differ per file
if (execFileSync('git', ['rev-parse', '--is-shallow-repository'], { encoding: 'utf8' }).trim() === 'false') {
  const real = makeLastmod();
  const dates = ['src/pages/index.astro', 'src/pages/fitur.astro'].map(real);
  assert.ok(dates.every((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)), `expected real dates, got ${dates}`);
  assert.notEqual(dates[0], dates[1], 'full history should not stamp every page the same day');
}

console.log('lastmod: all checks passed');
