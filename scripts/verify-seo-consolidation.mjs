import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import assert from 'node:assert/strict';

// Config contains only erasable type annotations; use Node's native TS stripper.
import { stripTypeScriptTypes } from 'node:module';
const configText = fs.readFileSync('next.config.ts', 'utf8');
const recovery = stripTypeScriptTypes(fs.readFileSync('data/backlinkRecoveryRedirects.ts', 'utf8')).replace('export const backlinkRecoveryRedirects', 'const backlinkRecoveryRedirects');
const code = recovery + '\n' + stripTypeScriptTypes(configText).replace('import path from "path";', '').replace('import { backlinkRecoveryRedirects } from "./data/backlinkRecoveryRedirects";', '').replace('export default nextConfig;', 'globalThis.auditConfig = nextConfig;');
const context = { path, __dirname: process.cwd() };
vm.runInNewContext(code, context);
const redirects = await context.auditConfig.redirects();
const firstMatch = new Map();
for (const r of redirects) if (!r.has && !firstMatch.has(r.source)) firstMatch.set(r.source, r);
const inventory = JSON.parse(fs.readFileSync('docs/sitewide-audit-2026-10-07/crawl.json'));
const metroSource = fs.readFileSync('data/metros.ts', 'utf8');
const cities = [...metroSource.matchAll(/\{ slug: "([^"]+)", city:/g)].map(m => m[1]);
assert.equal(cities.length, 25);
const destinations = {
  'law-firm-seo': '/law-firm-seo/',
  'law-firm-marketing': '/services/',
  'law-firm-website-design': '/law-firm-websites/',
  'google-ads-lawyers': '/google-ads-for-law-firms/',
};
const retired = new Set();
for (const city of cities) for (const [service, destination] of Object.entries(destinations)) {
  for (const slash of ['', '/']) {
    const source = `/${service}-${city}${slash}`;
    retired.add(source);
    const rule = firstMatch.get(source);
    assert.equal(rule?.destination, destination, source);
    assert.equal(rule.statusCode, 301, source);
    assert.equal(firstMatch.has(destination), false, `Redirect chain: ${source}`);
  }
  const target = inventory.find(r => r.url === `https://jurispage.com${destination}`);
  assert.equal(target?.status, 200, destination);
  assert.equal(target?.canonical, target?.url, destination);
}
assert.equal(firstMatch.has('/law-firm-seo-cost/'), false);
assert.equal(fs.readFileSync('app/sitemap.ts', 'utf8').includes('metroPages'), false);
const active = inventory.filter(r => r.sitemap && !retired.has(new URL(r.url).pathname) && !r.url.endsWith('/blog/juris-digital-acquires-jurispage/'));
// This baseline predates the blog merger; verify the rewritten news link in the
// built-site HTTP check, not against historical HTML.
const badLinks = active.flatMap(row => (row.anchors || []).filter(a => retired.has(new URL(a.url).pathname)).map(a => ({ from: row.url, to: a.url })));
assert.deepEqual(badLinks, [], 'Retained pages link to redirect sources');
console.log(`PASS: 100 metro pages, 200 permanent variants, four canonical 200 destinations, no literal redirect-source links from ${active.length} retained sitemap pages.`);
console.log('Wildcard redirects, host/trailing-slash handling, and deployed behavior also require an HTTP crawl.');
