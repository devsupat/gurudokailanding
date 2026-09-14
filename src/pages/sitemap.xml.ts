import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';
import { SITE } from '../lib/schema';

// Routes are derived from the page files themselves, so the sitemap can no
// longer drift from what actually builds (the hand-kept public/sitemap.xml
// carried lastmod dates two months older than the pages).
// lastmod is the page file's last commit date. ponytail: no lastmod rather
// than a fake one — a shallow CI clone has no history for most files, and
// stamping every URL with today's date would make the signal worthless.
const lastmod = (file: string): string | null => {
  try {
    const d = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : null;
  } catch {
    return null; // no git, or shallow clone with no history for this file
  }
};

const routes = Object.keys(import.meta.glob('./**/*.astro'))
  .filter((f) => f !== './404.astro')
  .map((f) => ({
    path:
      '/' +
      f.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, ''),
    lastmod: lastmod(f.replace(/^\.\//, 'src/pages/')),
  }))
  .map((r) => ({ ...r, path: r.path === '/' ? '/' : `${r.path}/` }))
  .sort((a, b) => a.path.localeCompare(b.path));

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${SITE}${r.path}</loc>${r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : ''}</url>`
  )
  .join('\n')}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
