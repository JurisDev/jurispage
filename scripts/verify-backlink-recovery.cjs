const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { buildCustomRoute } = require('next/dist/lib/build-custom-route');
require.extensions['.ts'] = (mod, filename) => mod._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText, filename);
const root = path.resolve(__dirname, '..');
const config = require(path.join(root, 'next.config.ts')).default;
const { backlinkRecoveryRedirects } = require(path.join(root, 'data/backlinkRecoveryRedirects.ts'));
const audit = JSON.parse(fs.readFileSync(path.join(root, 'docs/releases/backlink-recovery-20261007/url-audit.json')));
(async () => {
  const all = (await config.redirects()).map(r => buildCustomRoute('redirect', r));
  const first = pathname => all.find(r => new RegExp(r.regex).test(pathname));
  const seen = new Set();
  for (const r of backlinkRecoveryRedirects) {
    assert(!seen.has(r.source), `Duplicate source: ${r.source}`);
    seen.add(r.source);
    assert(r.permanent, `Non-permanent redirect: ${r.source}`);
    for (const variant of [r.source, r.source + '/']) {
      const match = first(variant);
      assert.equal(match?.destination, r.destination, `Wrong first-match destination: ${variant}`);
      assert.equal(match.statusCode, 308);
    }
    assert(!first(r.destination), `Destination redirects again: ${r.destination}`);
    assert(!backlinkRecoveryRedirects.some(x => new RegExp(buildCustomRoute('redirect', x).regex).test(r.source + '/unrelated-child/')), `Broad match: ${r.source}`);
  }
  for (const r of audit.filter(x => x.action === 'retain-working-page')) {
    assert(!first(r.source === '/' ? '/' : r.source + '/'), `Working page intercepted: ${r.source}`);
  }
  assert.equal(backlinkRecoveryRedirects.length, audit.filter(x => x.action === 'redirect').length);
  console.log(JSON.stringify({ redirectPaths: seen.size, variantsVerified: seen.size * 2, workingPagesPreserved: audit.filter(x => x.action === 'retain-working-page').length, totalRules: all.length, loops: 0, chains: 0, broadNewRules: 0 }, null, 2));
})().catch(e => { console.error(e); process.exit(1); });
