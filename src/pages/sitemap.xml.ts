import type { APIRoute } from 'astro';
import { SITE } from '../lib/schema';
import { makeLastmod } from '../lib/lastmod.mjs';

// Routes are derived from the page files themselves, so the sitemap can no
// longer drift from what actually builds (the hand-kept public/sitemap.xml
// carried lastmod dates two months older than the pages).
const lastmod = makeLastmod();

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
