import fs from 'node:fs';
const rows = JSON.parse(fs.readFileSync('docs/sitewide-audit-2026-10-07/crawl.json'));
const byPath = new Map(rows.map(r => [new URL(r.url).pathname, r]));
const cities = [...fs.readFileSync('data/metros.ts','utf8').matchAll(/\{ slug: "([^"]+)", city:/g)].map(m=>m[1]);
const serviceMap = {'law-firm-seo':'/law-firm-seo/','law-firm-marketing':'/services/','law-firm-website-design':'/law-firm-websites/','google-ads-lawyers':'/google-ads-for-law-firms/'};
const metroMap = new Map(cities.flatMap(city=>Object.entries(serviceMap).map(([s,target])=>[`/${s}-${city}/`,target])));
const metroClicks = new Set(['/google-ads-lawyers-minneapolis/','/google-ads-lawyers-los-angeles/','/law-firm-website-design-portland/']);
const specific = {
  '/growth-assessment/':['merge-301','/see-my-market-gap/','Identical MarketGapForm and report intent; destination covers workflow.'],
  '/blog/juris-digital-acquires-jurispage/':['merge-301','/jurispage-now-backed-by-juris-digital/','Client-facing acquisition explanation combined; historical press release remains.'],
  '/growth-path/':['keep-noindex','/growth-path/','Separate diagnostic application; preserve APIs and tokenized reports.'],
  '/calculate-roi-law-firm-ppc-campaign/':['keep-improve-sitemap','/calculate-roi-law-firm-ppc-campaign/','Tool intent; clarified assumptions and linked from Ads service.'],
  '/law-firm-seo-cost/':['keep-improve','/law-firm-seo-cost/','Budget guide, not actual package pricing; 11 clicks, 3210 impressions, position 14.2.'],
  '/services/pricing/':['keep','/services/pricing/','Actual offer/terms distinct from market budgeting guide.'],
  '/law-firm-seo/':['keep-improve','/law-firm-seo/','Hire SEO provider; 28115 impressions, position 61.4; guide and Maps serve different intents.'],
  '/local-seo-for-law-firms/':['keep','/local-seo-for-law-firms/','Maps/GBP service intent; five reported external links.'],
  '/scorpion-legal-marketing-alternative/':['keep-improve','/scorpion-legal-marketing-alternative/','Vendor-switch intent; 2327 impressions, position 12.2.'],
  '/law-firm-content-writing/':['keep-improve','/law-firm-content-writing/','Content service intent; 13590 impressions, position 24.6.'],
  '/google-ads-for-law-firms/':['keep-improve','/google-ads-for-law-firms/','Paid search management intent; 6944 impressions, position 29.7.'],
  '/best-law-firm-seo-companies/':['keep-improve','/best-law-firm-seo-companies/','Provider shortlist intent; 41288 impressions, position 52.3; clarify editorial limitations.'],
  '/news/jurispage-acquired-by-juris-digital-2026/':['keep','/news/jurispage-acquired-by-juris-digital-2026/','Historical dated release distinct from current-client explanation.'],
  '/privacy-policy/':['owner-action-needed','','Existing homepage redirect; approved policy text needed.'],
};
const shingles = text => { const w=(text||'').toLowerCase().split(/\s+/); return new Set(w.slice(0,-4).map((_,i)=>w.slice(i,i+5).join(' '))); };
const overlap = (a,b) => { if(!a || !b) return ''; const x=shingles(a.text),y=shingles(b.text);const n=[...x].filter(v=>y.has(v)).length;return (n/(x.size+y.size-n)).toFixed(3); };
const ledger = rows.map(row=>{
  const path=new URL(row.url).pathname,parts=path.split('/').filter(Boolean);
  let [decision,target,reason]=specific[path]||['keep',path,'No consolidation selected in this pass; preserve existing intent and incoming links.'];
  let clicks='',parentOverlap='',serviceOverlap='';
  if(metroMap.has(path)){decision='merge-301';target=metroMap.get(path);clicks=metroClicks.has(path)?1:0;reason='Retire templated metro network; 3 combined GSC clicks in audited three months. Match destination to service.';}
  if(parts.length===2 && parts[0].endsWith('-marketing') && byPath.has('/'+parts[1]+'/')) {
    decision='keep-pending-query-data';
    const intent={'law-firm-seo':'organic acquisition','local-seo-for-law-firms':'Maps and GBP','google-ads-for-law-firms':'paid search','law-firm-websites':'website development','law-firm-content-writing':'content production'}[parts[1]];
    reason=`Practice-specific ${intent} differs from integrated marketing parent. Add only matching case proof. Shared-query traffic unavailable; no traffic-based deletion conclusion.`;
    parentOverlap=overlap(row,byPath.get('/'+parts[0]+'/'));
    serviceOverlap=overlap(row,byPath.get('/'+parts[1]+'/'));
  }
  if(row.finalUrl && row.finalUrl!==row.url && !specific[path]){decision='retain-existing-redirect';target=new URL(row.finalUrl).pathname;reason='Existing legacy redirect; not a new merge.';}
  if(row.status===404){decision='not-live-baseline';reason='Extra guessed audit URL, not a linked sitemap page.';}
  if(row.robots?.some(r=>r.content?.includes('noindex'))){decision='keep-noindex';reason='Existing intentional noindex utility/test destination.';}
  return {url:row.url,decision,target,reason,gsc_clicks_jul5_oct4_2026:clicks,parent_text_jaccard:parentOverlap,national_service_text_jaccard:serviceOverlap,traffic_limit:metroMap.has(path)?'Saved browser-verified metro report':'Fresh query/page report unavailable: invalid_grant'};
});
fs.mkdirSync('docs/sitewide-audit-2026-10-08',{recursive:true});
const keys=Object.keys(ledger[0]);
fs.writeFileSync('docs/sitewide-audit-2026-10-08/url-decisions.csv',[keys.join(','),...ledger.map(r=>keys.map(k=>'"'+String(r[k]).replaceAll('"','""')+'"').join(','))].join('\n'));
console.log(`Wrote ${ledger.length} baseline URL decisions, including ${ledger.filter(r=>r.decision==='keep-pending-query-data').length} individually scored practice/service URLs. Text similarity is not proof of causal cannibalization.`);
