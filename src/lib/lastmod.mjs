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
 * @param {(args: string[]) => string} [git] injectable runner, for tests
 * @returns {(file: string) => string | null}
 */
export function makeLastmod(git = runGit) {
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

  return (file) => {
    if (!isUsable()) return null;
    try {
      const d = git(['log', '-1', '--format=%cs', '--', file]);
      return /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : null;
    } catch {
      return null;
    }
  };
}
