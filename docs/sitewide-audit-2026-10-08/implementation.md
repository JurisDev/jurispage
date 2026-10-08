# Consolidation implementation — October 8, 2026

Status: local changes on `codex/city-consolidation`; not merged or deployed. This supersedes the earlier audit's recommendation to pilot five metro pages. The user approved retirement of the metro network after reviewing actual traffic.

## Decisions and evidence

The October 7 browser-verified GSC/GA4 evidence is in [city-decision.md](../sitewide-audit-2026-10-07/city-decision.md). Both Google MCP report calls still returned `invalid_grant` on October 8. No fresh query/page export or qualified-lead attribution was available. Missing conversion data is not evidence of zero leads. We have not proved causal ranking cannibalization or a doorway penalty.

| URL / cluster | Decision | Reason and preservation |
|---|---|---|
| 100 metro service pages | Retire with exact 301 mappings | 3 GSC clicks in July 5–October 4; 9 over the available 16-month period; 214 GA views in July 9–October 6. Repetitive city/service templates consume 55.9% of sitemap. Map SEO→SEO, Ads→Ads, websites→websites, general marketing→services. No blanket homepage redirect. |
| Legacy suburb URLs | Point directly to matching national service | Removes the suburb→metro→service chain. Retain old incoming-link routes. |
| `/growth-assessment/` | 301 to `/see-my-market-gap/` | Identical MarketGapForm, audience, and report promise. Destination already covers the workflow/FAQ; no unique useful material lost. This is a functional duplication decision, not a claim of measured ranking loss. |
| `/blog/juris-digital-acquires-jurispage/` | Merge into `/jurispage-now-backed-by-juris-digital/`, then 301 | Same client-facing acquisition explanation. Transferred ownership context, integrated-service explanation, and current-client contact guidance. Removed retired article from blog lists/static params/sitemap; rewired press-release link. Original MDX remains recoverable. No verified traffic winner available. |
| `/news/jurispage-acquired-by-juris-digital-2026/` | Keep | Original dated press release with effective date/legal entity/media context. Distinct historical purpose from evergreen client transition guidance; now links to the surviving explanation. |
| `/growth-path/` | Keep application; noindex its landing page | Separate GrowthPathForm, APIs, and tokenized-report workflow. Do not break reports or force it into a different product. Exclude competing organic acquisition landing page; continue following useful links. |
| `/calculate-roi-law-firm-ppc-campaign/` | Keep; clarify assumptions, link and sitemap | Calculator intent differs from hiring PPC management. Same component is embedded on Ads page, but tool utility justifies a standalone URL. Corrected ROAS calculation/label, collected-fee definition, and disclosed presets/cost exclusions. |
| `/law-firm-seo/` vs `/blog/law-firm-seo-guide-2026/` | Keep, clarify and cross-link | Hiring intent vs education. National service has 28,115 reported impressions but position 61.4; this does not justify deleting its supporting guide. Added explicit guide/cost/Maps navigation. |
| `/local-seo-for-law-firms/` vs national SEO | Keep | Maps/GBP-specific scope vs full organic program; five reported external links to local SEO. Do not discard a distinct service and linked destination without query evidence. |
| `/services/pricing/` vs `/law-firm-seo-cost/` | Keep | Actual offers vs budgeting/market-cost guide. Cost page has 11 clicks, 3,210 impressions, position 14.2 and 12 reported external links. Strengthened the guide rather than redirecting it to pricing. |
| Homepage vs `/services/` | Keep | Brand/agency entry vs service selection. Metro marketing redirects land on the service directory, now explicitly nationwide with market-specific planning. |
| 25 practice/service pages vs their five practice parents and national services | Keep pending query-level evidence; improve relevant proof | Parents cover integrated practice marketing; children cover SEO, Maps, Ads, website, or content work for that practice. Detailed tactics/FAQs differ. Low traffic alone is not enough to erase distinct service intents. Each appears separately in `url-decisions.csv`, including measured text overlap against parent and national service. No per-URL traffic or conversion figure is invented. |
| DUI vs criminal-defense practice marketing | Keep pending query evidence | DUI is a subset of criminal defense but has a distinct specialization and urgent intake context. Compare shared query winners before any further merger. |

## Commercial priorities implemented

1. SEO cost (position 14.2): Wilson case study, acquisition-cost explanation, corrected fees-vs-settlement math, removed unsupported aggregate return claim, FAQ schema generated from the same visible answers.
2. Scorpion alternative (position 12.2 / 2,327 impressions): migration/ownership/measurement checklist and Sands proof. Explicitly not described as a verified Scorpion migration.
3. Content writing (position 24.6 / 13,590 impressions): Wilson example with combined-program attribution caveat, links into SEO and cost comparison.
4. Ads (position 29.7 / 6,944 impressions): clarified media vs fees and calculator assumptions. Existing relevant case studies retained.
5. Best SEO companies (position 52.3 / 41,288 impressions): explained editorial/non-independent methodology, quote verification, budget and proof evaluation. Competitor price/contract research remains necessary before calling the entire comparison freshly verified.
6. National SEO: clearer intent/navigation; practice/service template now adds case studies only when both practice and service mappings match. No unrelated case-study insertion and no invented outcomes.

## Technical changes

- Metro URLs removed from static generation and sitemap; unused template/data retained for recovery. Consolidation rules use **301**, not Next's default permanent 308.
- Next's existing no-slash→slash normalization remains a 308 before the content 301. Canonical slash URLs go directly to the final 200. All rendered internal links use final URLs, avoiding these normalization hops. Production www/apex behavior still needs live verification.
- Sitemap: 179 baseline → minus 100 metros → minus acquisition blog → plus calculator = **79**.
- Desktop navigation supports keyboard, click, Escape and focus-leave closure. Closed panels are inert. Mobile hidden drawer/accordions are also inert and accordions expose expanded state.
- Corrected the unsupported settlement rich-snippet promise and the 1%-conversion/CPL calculation in practice-service copy.
- Existing local CRM fixes retained: pending delivery statuses stored before background work; Slack notification fields split to comply with section limits. This is **not** a durable delivery retry system. No new CRM test lead or customer communication sent.

## Verification and release

Production build and full TypeScript validation passed in a clean temporary checkout using the lockfile. The workspace's existing dependency reads stalled; fresh dependencies resolved that verification blocker. No production credentials or live database were used for the clean build.

`node scripts/verify-seo-http.mjs` checks a built server: all 102 retired canonical URLs return 301 with attribution query parameters preserved; final targets return 200; all 79 sitemap pages are 200/self-canonical/indexable with one H1; all extracted internal anchor targets return 200 with redirects disabled. Results: `http-verification.json`. Config checks also cover both variants of 100 metro URLs. No form is submitted by these checks.

Final run: **106 redirect checks** (102 retired URLs plus four representative suburb/service paths), **79 sitemap pages**, **79 unique internal anchor targets**, **zero errors**. Titles/descriptions are nonempty and embedded JSON-LD parses. Latest implementation passed production build and TypeScript in the clean checkout. Desktop Services click, Enter, and Escape were tested in Chrome; mobile at 390×844 passed closed-drawer exclusion, accordion expansion, and Escape returning focus to the toggle. The responsive override was reset. This is focused interaction QA, not exhaustive accessibility or Core Web Vitals certification.

Before production release: merge through normal review, then verify the same HTTP checks against production plus www/apex and representative suburb URLs. Keep relevant redirects indefinitely where feasible, at least through the migration monitoring period. Do not block retired paths in robots.txt or request removals. Redirects preserve a signal-consolidation path, but zero equity loss or stable rankings cannot be guaranteed.

Outstanding: Google MCP authorization; reliable successful-submit/qualified-lead/won-client reporting; durable CRM delivery retry; owner-approved privacy policy (existing `/privacy-policy/` redirects home); fresh competitor claim verification; field performance data. These are not reported as fixed.

After release, compare combined source+destination GSC clicks/impressions over matched 28-day windows and review again at 56/90 days. Watch the historical city click-bearing URLs from the evidence log. Judge commercial success by qualified leads and clients, not fewer indexed URLs.
