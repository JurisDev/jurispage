import fs from 'node:fs';
const base='https://jurispage.com';
const out='docs/sitewide-audit-2026-10-07';
fs.mkdirSync(out,{recursive:true});
const clean=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
const attrs=s=>Object.fromEntries([...s.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m=>[m[1],m[2]]));
const sitemap=await (await fetch(base+'/sitemap.xml')).text();
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
const extras=['/homepage-b/','/growth-report/','/growth-assessment/','/growth-path/','/free-market-report/','/thank-you-for-reaching-out/','/calculate-roi-law-firm-ppc-campaign/','/privacy-policy/','/terms/'];
const queue=[...new Set([...urls,...extras.map(p=>base+p)])];
const rows=[];
async function crawl(url){
 try {
 const start=Date.now(),r=await fetch(url,{signal:AbortSignal.timeout(20000)}),html=await r.text();
 const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]||html;
 const text=clean(main.replace(/<(script|style|nav|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi,''));
 const metas=[...html.matchAll(/<meta\b[^>]*>/gi)].map(m=>attrs(m[0]));
 const links=[...html.matchAll(/<link\b[^>]*>/gi)].map(m=>attrs(m[0]));
 const anchors=[...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map(m=>({href:attrs(m[1]).href,anchor:clean(m[2])})).filter(a=>a.href).map(a=>({...a,url:new URL(a.href,url).href.split('#')[0]})).filter(a=>a.url.startsWith(base));
 const schemas=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>{try{return JSON.parse(m[1])}catch{return 'INVALID'}});
 rows.push({url,sitemap:urls.includes(url),status:r.status,finalUrl:r.url,fetchMs:Date.now()-start,bytes:Buffer.byteLength(html),title:clean(html.match(/<title[^>]*>(.*?)<\/title>/is)?.[1]||''),description:metas.find(m=>m.name==='description')?.content||'',robots:metas.filter(m=>['robots','googlebot'].includes(m.name)),canonical:links.find(l=>l.rel==='canonical')?.href||'',h1:[...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gis)].map(m=>clean(m[1])),h2:[...main.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/gis)].map(m=>clean(m[1])),words:text.split(/\s+/).length,text,anchors,schemas});
 }catch(e){rows.push({url,error:e.message})}
}
let index=0;
await Promise.all(Array.from({length:5},async()=>{while(index<queue.length){await crawl(queue[index++]); if(rows.length%30===0) console.log('Crawled',rows.length)}}));
rows.sort((a,b)=>a.url.localeCompare(b.url));
fs.writeFileSync(out+'/crawl.json',JSON.stringify(rows,null,2));
const cols=['url','sitemap','status','finalUrl','title','description','canonical','words','bytes'];
fs.writeFileSync(out+'/page-inventory.csv',[cols.join(','),...rows.map(r=>cols.map(c=>'"'+String(r[c]??'').replaceAll('"','""')+'"').join(','))].join('\n'));
console.log(JSON.stringify({pages:rows.length,sitemap:urls.length,statuses:rows.reduce((a,r)=>(a[r.status||'error']=(a[r.status||'error']||0)+1,a),{}),anomalies:rows.filter(r=>r.status!==200||r.canonical!==r.url||r.h1?.length!==1).map(({url,status,finalUrl,canonical,h1,error})=>({url,status,finalUrl,canonical,h1,error}))},null,2));
