import fs from 'node:fs';
import assert from 'node:assert/strict';

// Run against a built local server. No submissions, CRM calls, or mutations.
const base = process.argv[2] || 'http://127.0.0.1:3100';
const canonicalOrigin = 'https://jurispage.com';
const results = { pages: [], redirects: [], links: [], errors: [] };
const request = (path) => fetch(new URL(path, base), { redirect: 'manual', signal: AbortSignal.timeout(15000) });
const xml = await (await request('/sitemap.xml')).text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
const cities = [...fs.readFileSync('data/metros.ts', 'utf8').matchAll(/\{ slug: "([^"]+)", city:/g)].map(m => m[1]);
const services = { 'law-firm-seo': '/law-firm-seo/', 'law-firm-marketing': '/services/', 'law-firm-website-design': '/law-firm-websites/', 'google-ads-lawyers': '/google-ads-for-law-firms/' };
const mappings = cities.flatMap(city => Object.entries(services).map(([service, target]) => [`/${service}-${city}/`, target]));
mappings.push(['/growth-assessment/', '/see-my-market-gap/'], ['/blog/juris-digital-acquires-jurispage/', '/jurispage-now-backed-by-juris-digital/']);
const suburbs = Object.entries(services).map(([service, target]) => [`/${service}-jersey-city/`, target]);
const targets = new Set();
async function pool(items, fn) {
  let i = 0;
  await Promise.all(Array.from({length: 6}, async () => { while(i < items.length) { const item = items[i++]; try { await fn(item); } catch(e) { results.errors.push({item, error:e.message}); } } }));
}
await pool([...mappings, ...suburbs], async ([source, target]) => {
  assert(!urls.includes(canonicalOrigin + source), `Retired URL in sitemap: ${source}`);
  const r = await request(source + '?utm_source=seo-verification');
  const location = new URL(r.headers.get('location'), base);
  assert.equal(r.status, 301, source);
  assert.equal(location.pathname, target, source);
  assert.equal(location.searchParams.get('utm_source'), 'seo-verification', source);
  assert.equal((await request(target)).status, 200, target);
  results.redirects.push({source, target, status:r.status});
});
await pool(urls, async url => {
  const pathname = new URL(url).pathname;
  const r = await request(pathname);
  assert.equal(r.status, 200, url);
  const html = await r.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert(title?.trim(), `Missing title: ${url}`);
  assert(/<meta name="description" content="[^"]+"/.test(html), `Missing description: ${url}`);
  for (const schema of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(schema[1]);
  assert(html.includes(`rel="canonical" href="${url}"`), `Canonical: ${url}`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `H1: ${url}`);
  assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html), `Noindex: ${url}`);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (/^(tel:|mailto:|javascript:|#)/.test(href)) continue;
    const dest = new URL(href, canonicalOrigin + pathname);
    if (dest.origin === canonicalOrigin) targets.add(dest.pathname + dest.search);
  }
  results.pages.push({url, status:r.status, title});
});
await pool([...targets], async path => {
  const r = await request(path);
  results.links.push({path, status:r.status, location:r.headers.get('location')});
  assert.equal(r.status, 200, `Internal link: ${path}`);
});
fs.mkdirSync('docs/sitewide-audit-2026-10-08', {recursive:true});
fs.writeFileSync('docs/sitewide-audit-2026-10-08/http-verification.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify({pages:results.pages.length, redirects:results.redirects.length, internalTargets:results.links.length, errors:results.errors}, null, 2));
assert.equal(results.errors.length, 0, 'SEO HTTP verification failed');
