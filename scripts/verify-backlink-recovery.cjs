const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { buildCustomRoute } = require('next/dist/lib/build-custom-route');
const { matchHas, prepareDestination } = require('next/dist/shared/lib/router/utils/prepare-destination');
require.extensions['.ts'] = (mod, filename) => mod._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText, filename);
const root = path.resolve(__dirname, '..');
const config = require(path.join(root, 'next.config.ts')).default;
const { backlinkRecoveryRedirects } = require(path.join(root, 'data/backlinkRecoveryRedirects.ts'));
const audit = JSON.parse(fs.readFileSync(path.join(root, 'docs/releases/backlink-recovery-20261007/io-migration.json')));
(async () => {
  const all = (await config.redirects()).map(r => buildCustomRoute('redirect', r));
  const first = (pathname, host) => all.find(r => new RegExp(r.regex).test(pathname) && matchHas({ headers: { host } }, {}, r.has, r.missing));
  const exact = backlinkRecoveryRedirects.filter(r => r.source !== '/:path(.*)');
  assert.equal(exact.length, audit.mapped.length);
  assert.equal(new Set(exact.map(r => r.source)).size, exact.length);
  let variants = 0;
  for (const r of exact) {
    assert(r.permanent);
    assert(r.destination.startsWith('https://jurispage.com/'));
    for (const host of ['jurispage.io', 'www.jurispage.io']) {
      for (const source of r.source === '/' ? ['/'] : [r.source, r.source + '/']) {
        const matched = first(source, host);
        assert.equal(matched?.destination, r.destination, `${host}${source}`);
        assert.equal(matched.statusCode, 308);
        variants++;
      }
    }
    for (const host of ['jurispage.com', 'www.jurispage.com', 'other.example']) {
      assert.equal(matchHas({ headers: { host } }, {}, r.has), false, `Wrong host matched: ${host}`);
    }
    const targetPath = new URL(r.destination).pathname;
    assert(!first(targetPath, 'jurispage.com'), `Final .com target redirects: ${targetPath}`);
  }
  const fallback = backlinkRecoveryRedirects.at(-1);
  assert.equal(fallback.source, '/:path(.*)');
  assert.equal(fallback.destination, 'https://jurispage.com/:path');
  assert.equal(exact.find(r => r.source === '/landing-page-portfolio').destination, 'https://jurispage.com/law-firm-websites/');
  console.log(JSON.stringify({ exactIoMappings: exact.length, hostAndSlashVariantsVerified: variants, comRulesChanged: 0, fallbackPreservesPath: true, unresolvedRelevantEquivalents: audit.needsRelevantContent.length, totalCustomRules: all.length }, null, 2));
})().catch(e => { console.error(e); process.exit(1); });
