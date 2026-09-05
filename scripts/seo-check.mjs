// Static SEO validator for the built site. Run: node scripts/seo-check.mjs [distDir]
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const dist = process.argv[2] || 'dist';
const SITE = 'https://gurudokai.supathub.my.id';

const htmlFiles = [];
(function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e.endsWith('.html')) htmlFiles.push(p);
  }
})(dist);

const pick = (html, re) => (html.match(re) || [])[1]?.trim();
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);

const pages = htmlFiles.map((file) => {
  const html = readFileSync(file, 'utf8');
  const route = '/' + relative(dist, file).split(sep).slice(0, -1).concat('').join('/');
  return {
    file, route: route.replace('//', '/'),
    title: pick(html, /<title>([\s\S]*?)<\/title>/),
    description: pick(html, /<meta name="description" content="([^"]*)"/),
    canonical: pick(html, /<link rel="canonical" href="([^"]*)"/),
    robots: pick(html, /<meta name="robots" content="([^"]*)"/),
    ogUrl: pick(html, /<meta property="og:url" content="([^"]*)"/),
    h1: all(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g),
    jsonld: all(html, /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
    links: all(html, /<a\b[^>]*href="([^"]+)"/g),
    imgs: [...html.matchAll(/<img\b([^>]*)>/g)].map((m) => m[1]),
  };
});

const errors = [], warns = [];
const err = (r, m) => errors.push(`${r}: ${m}`);
const warn = (r, m) => warns.push(`${r}: ${m}`);

const seen = new Map();
for (const p of pages) {
  if (!p.title) err(p.route, 'missing title');
  if (!p.description) err(p.route, 'missing description');
  if (p.title && p.title.length > 65) warn(p.route, `title ${p.title.length} chars`);
  if (p.description && (p.description.length < 70 || p.description.length > 165))
    warn(p.route, `description ${p.description.length} chars`);
  if (!p.canonical) err(p.route, 'missing canonical');
  else if (p.canonical !== SITE + p.route) err(p.route, `canonical mismatch: ${p.canonical}`);
  if (p.ogUrl && p.ogUrl !== p.canonical) err(p.route, 'og:url != canonical');
  if (p.h1.length === 0) err(p.route, 'missing h1');
  if (p.h1.length > 1) err(p.route, `${p.h1.length} h1 tags`);
  for (const key of ['title', 'description']) {
    const k = key + '::' + p[key];
    if (p[key] && seen.has(k)) err(p.route, `duplicate ${key} with ${seen.get(k)}`);
    else if (p[key]) seen.set(k, p.route);
  }
  for (const raw of p.jsonld) {
    try { JSON.parse(raw); } catch (e) { err(p.route, `invalid JSON-LD: ${e.message}`); }
  }
  for (const a of p.imgs) {
    if (!/\salt="/.test(a)) err(p.route, `img without alt: ${a.slice(0, 70)}`);
    else if (/\salt=""/.test(a) === false && !/width=/.test(a)) warn(p.route, `img without width/height: ${a.slice(0, 60)}`);
  }
}

// Internal link graph
const routes = new Set(pages.map((p) => p.route));
const inbound = new Map([...routes].map((r) => [r, new Set()]));
for (const p of pages) {
  for (const href of p.links) {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    const [path] = href.split('#');
    if (!path) continue;
    if (!path.endsWith('/')) err(p.route, `internal link without trailing slash: ${href}`);
    if (!routes.has(path)) err(p.route, `broken internal link: ${href}`);
    else if (path !== p.route) inbound.get(path).add(p.route);
  }
}
for (const [r, from] of inbound) {
  if (r === '/') continue;
  if (from.size === 0) err(r, 'orphan page (no inbound internal links)');
  else if (from.size === 1) warn(r, `only 1 inbound link (from ${[...from][0]})`);
}

// Sitemap
const smPath = join(dist, 'sitemap.xml');
if (!existsSync(smPath)) err('/sitemap.xml', 'missing');
else {
  const locs = all(readFileSync(smPath, 'utf8'), /<loc>([^<]+)<\/loc>/g);
  const set = new Set();
  for (const loc of locs) {
    if (set.has(loc)) err('/sitemap.xml', `duplicate URL ${loc}`);
    set.add(loc);
    if (!loc.startsWith(SITE)) err('/sitemap.xml', `foreign URL ${loc}`);
    const r = loc.slice(SITE.length) || '/';
    if (!routes.has(r)) err('/sitemap.xml', `URL not a built route: ${loc}`);
    const pg = pages.find((p) => p.route === r);
    if (pg?.robots?.includes('noindex')) err('/sitemap.xml', `noindex page listed: ${loc}`);
  }
  for (const r of routes) if (!set.has(SITE + (r === '/' ? '/' : r))) err('/sitemap.xml', `route missing from sitemap: ${r}`);
}

console.log(`Checked ${pages.length} pages in ${dist}\n`);
for (const w of warns) console.log('WARN  ' + w);
console.log('');
for (const e of errors) console.log('ERROR ' + e);
console.log(`\n${errors.length} error(s), ${warns.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
