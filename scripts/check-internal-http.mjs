import fs from 'node:fs';
const rows = JSON.parse(fs.readFileSync('docs/sitewide-audit-2026-10-07/crawl.json'));
const urls = [...new Set(rows.filter(r => r.sitemap).flatMap(r => r.anchors.map(a => a.url)))];
let index = 0;
const results = [];
await Promise.all(Array.from({length: 5}, async () => {
  while (index < urls.length) {
    const url = urls[index++];
    try {
      const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
      results.push({url, status: response.status, location: response.headers.get('location')});
      await response.body?.cancel();
    } catch (error) { results.push({url, error: error.message}); }
  }
}));
fs.writeFileSync('docs/sitewide-audit-2026-10-07/internal-http.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify({checked: results.length, issues: results.filter(r => r.status !== 200)}, null, 2));
