// Refreshes src/data/lastmod.json, the committed snapshot the sitemap falls
// back to when git history is unavailable at build time (Cloudflare Pages
// checks out depth 1, so `git log` there cannot answer per-file dates).
//
// Runs as `prebuild`, so any local build refreshes it. On a shallow checkout
// it writes nothing and exits 0: the committed snapshot is the better answer.
//
// Run: node scripts/gen-lastmod.mjs
import { execFileSync } from 'node:child_process';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'src/data/lastmod.json';
const PAGES = 'src/pages';

const git = (args) =>
  execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

const isShallow = () => {
  try {
    return git(['rev-parse', '--is-shallow-repository']) !== 'false';
  } catch {
    return true; // no git, not a repo: treat as unusable
  }
};

if (isShallow()) {
  console.log('lastmod: shallow or non-git checkout, keeping committed snapshot');
  process.exit(0);
}

const pageFiles = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p);
    else if (entry.endsWith('.astro')) pageFiles.push(p.split('\\').join('/'));
  }
})(PAGES);

const today = new Date().toISOString().slice(0, 10);

// A file with uncommitted edits is about to change; its last commit date would
// understate that, so stamp it today instead.
const dirty = new Set(
  git(['status', '--porcelain', '--', PAGES])
    .split('\n')
    .filter(Boolean)
    .map((line) => line.slice(3).replace(/^"|"$/g, '').split('\\').join('/'))
);

const snapshot = {};
for (const file of pageFiles.sort()) {
  if (dirty.has(file)) {
    snapshot[file] = today;
    continue;
  }
  try {
    const d = git(['log', '-1', '--format=%cs', '--', file]);
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) snapshot[file] = d;
  } catch {
    // leave the file out: no date beats a wrong one
  }
}

const json = JSON.stringify(snapshot, null, 2) + '\n';
const unchanged = existsSync(OUT) && readFileSync(OUT, 'utf8') === json;
if (unchanged) {
  console.log(`lastmod: ${OUT} already current (${Object.keys(snapshot).length} pages)`);
} else {
  writeFileSync(OUT, json);
  console.log(`lastmod: wrote ${OUT} (${Object.keys(snapshot).length} pages)`);
}
