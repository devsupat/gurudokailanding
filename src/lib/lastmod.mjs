import { execFileSync } from 'node:child_process';

const runGit = (args) =>
  execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

/**
 * Per-file last-commit date (YYYY-MM-DD) for sitemap <lastmod>, or null.
 *
 * A shallow clone (Cloudflare Pages checks out depth 1) still answers
 * `git log -1` — with the single commit's date, for every file. That looks
 * valid and is a lie, so shallow is a hard stop: no lastmod beats a wrong one.
 *
 * Which is exactly where every production build lands, so a snapshot committed
 * by `scripts/gen-lastmod.mjs` stands in there. Git still wins when its history
 * is real: the snapshot can only be as fresh as the last local build.
 *
 * @param {(args: string[]) => string} [git] injectable runner, for tests
 * @param {Record<string, string>} [snapshot] committed per-file dates, used when git cannot answer
 * @returns {(file: string) => string | null}
 */
export function makeLastmod(git = runGit, snapshot = {}) {
  let usable; // lazy: one `git rev-parse` per build, not per file
  const isUsable = () => {
    if (usable === undefined) {
      try {
        usable = git(['rev-parse', '--is-shallow-repository']) === 'false';
      } catch {
        usable = false; // no git, not a repo, command failed
      }
    }
    return usable;
  };

  const valid = (d) => (/^\d{4}-\d{2}-\d{2}$/.test(d ?? '') ? d : null);
  const fromSnapshot = (file) => valid(snapshot[file]);

  return (file) => {
    if (!isUsable()) return fromSnapshot(file);
    try {
      return valid(git(['log', '-1', '--format=%cs', '--', file])) ?? fromSnapshot(file);
    } catch {
      return fromSnapshot(file);
    }
  };
}
