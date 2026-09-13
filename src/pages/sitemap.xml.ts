import type { APIRoute } from 'astro';
import { SITE } from '../lib/schema';

// Routes are derived from the page files themselves, so the sitemap can no
// longer drift from what actually builds (the hand-kept public/sitemap.xml
// carried lastmod dates two months older than the pages).
// ponytail: no lastmod — an honest one needs full git history, which the CI
// shallow clone does not have. Add it back if per-URL recrawl timing matters.
const routes = Object.keys(import.meta.glob('./**/*.astro'))
  .map((f) => f.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, ''))
  .map((p) => (p ? `/${p}/` : '/'))
  .sort();

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${SITE}${r}</loc></url>`).join('\n')}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
