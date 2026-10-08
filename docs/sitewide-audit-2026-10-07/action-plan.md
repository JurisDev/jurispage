# JurisPage sitewide SEO audit and acquisition plan

> Historical audit. Subsequent browser-verified metro evidence is in `city-decision.md`; the approved October 8 consolidation and implementation status are in [the implementation log](../sitewide-audit-2026-10-08/implementation.md). The pilot-five-metros recommendation below has been superseded.

Audit date: October 7, 2026. Objective: qualified law-firm leads that become clients, including appropriately qualified Juris Digital handoffs.

## Evidence and completion status

Fresh live crawl: **179 sitemap URLs plus nine additional routes**, downloaded HTML, metadata, headings, structured data presence, internal links and content comparison. Repository review: templates, redirects, analytics events, attribution and contact delivery. Search-result spot checks: SEO cost and Scorpion alternatives. This is a sitewide automated audit with focused editorial/template review, not a manual visual review of every page.

**Fresh GSC and GA4 analysis is blocked.** The requested Juris Google Insights MCP returned `invalid_grant` on resource search, resource discovery and a direct GSC query/page report. Google must be reconnected before new performance findings, period comparisons or query cannibalization can be verified. No fresh GA4 report was retrieved. The numbers below come from the earlier saved audit, not a successful MCP pull in this audit. Index coverage, URL inspection, field Core Web Vitals and backlinks were not refreshed.

Evidence files: [page inventory](page-inventory.csv), [crawl](crawl.json), [analysis](analysis.json), [content overlap pairs](overlap-pairs.csv). The earlier performance source is [the prior audit](../seo-audit-2026-10-07.md).

## Executive diagnosis

The crawl fundamentals are healthy. The larger problem is allocating content and authority across too many similar commercial pages while the revenue measurement chain remains incomplete. Prioritize the pages with buying intent and existing visibility, then build original evidence around a small number of clusters. Publishing more city permutations is unlikely to be the best next investment.

### Previously recorded performance — provisional baseline

| Metric | Earlier observation | Interpretation and limit |
|---|---:|---|
| GSC clicks / impressions, July 5–October 4 | 142 / approximately 175,000 | Broad exposure, little captured demand; implied CTR approximately 0.081% |
| GSC average position | 43.9 | Most exposure is far below the top results; aggregate CTR alone does not diagnose bad titles |
| Brand query clicks: `jurispage` plus `juris page` | 56 | At least 39% of total reported clicks from these two variants; not a complete brand/non-brand split |
| GA4 sessions, July 9–October 6 | 3,269 | Date range differs from GSC; do not divide GSC clicks by GA sessions |
| Organic sessions / engagement rate | 275 / 54.55% | Higher-quality engagement than Direct, but no reliable qualified-lead rate established |
| Direct sessions / engagement rate | 2,686 / 14.93% | Investigate geography, hostnames and attribution; this alone does not prove bots |
| Key events | 0 | Historical measurement gap, not proof that zero leads arrived |
| 404 page views | 192 | Historical leakage; several redirects were subsequently fixed |

Recent tracking, redirect, sitemap and form changes happened on October 7. They cannot explain or improve the preceding 90-day data retroactively. Exclude the known synthetic test leads when evaluating conversions.

## Fresh findings, ordered by business impact

### 1. P1: 100 metro pages need a differentiation and consolidation decision

The sitemap contains 100 city/service pages (25 cities × four services), **55.9% of all sitemap URLs**. Another 25 pages combine practice areas with services; together those two families comprise **69.8%** of the inventory.

The metro template repeats the same process, proof statistics, offer and much of the FAQ copy. City-specific input largely consists of city names and one market paragraph. The live crawl found 1,341 metro-page pairs above 0.48 Jaccard similarity for sets of five-word text sequences. For example, the Los Angeles Google Ads and marketing pages score **0.612**. This is a repeatable similarity signal, not a percentage of copied words, an indexation verdict or proof of ranking cannibalization. Shared layout content contributes to the score.

**Action:** freeze additional metro expansion. Score all 100 URLs using US non-brand GSC impressions, clicks, unique query intent, links and qualified leads. Choose an initial five markets based on evidence and sales priorities. Give retained pages a dated local SERP analysis, real local examples, practice-specific acquisition economics, relevant case proof and a distinct service proposition. Merge only when audience and search intent materially coincide and there is a relevant destination. Use permanent redirects and update links/sitemap; do not mass-redirect every city to a national page or noindex all zero-click pages.

Google's [doorway policy](https://developers.google.com/search/docs/essentials/spam-policies) makes substantially similar city pages a quality risk when they primarily funnel visitors onward. This audit does not establish a penalty or manual action.

### 2. P1: Several overlapping URL families need explicit ownership

| Cluster | Existing URLs / families | Proposed intent owner and treatment |
|---|---|---|
| National law-firm SEO | `/law-firm-seo/`, `/blog/law-firm-seo-guide-2026/`, `/local-seo-for-law-firms/` | Services page owns hiring an SEO agency; guide owns education/planning; local SEO owns Maps/GBP. Preserve separate pages if query evidence supports these intents; cross-link with those meanings. |
| Practice marketing versus SEO | e.g. `/personal-injury-lawyer-marketing/` and `/personal-injury-lawyer-marketing/law-firm-seo/` | Parent owns integrated marketing; child owns practice-specific SEO. Compare shared queries and weekly winning URLs before any merger. Apply to all 25 intersections. |
| Same-city services | SEO, marketing, Google Ads and website-design pages for each city | Different services can deserve separate pages, but current repeated copy is insufficient differentiation. Pilot richer pages or one city hub where demand is limited. |
| Market analysis lead magnets | `/see-my-market-gap/`, `/growth-assessment/`, `/growth-path/` | Market Gap is the primary acquisition destination. Growth assessment has only about 138 words of server-rendered main text and a closely related promise. Decide whether it is a separate product flow or should consolidate. Growth Path may remain a distinct application, with explicit indexing and navigation policy. |
| Acquisition announcement | `/jurispage-now-backed-by-juris-digital/`, `/blog/juris-digital-acquires-jurispage/`, `/news/jurispage-acquired-by-juris-digital-2026/` | Select one primary company announcement. Preserve other versions only if they serve a distinct dated-news or customer-transition purpose; otherwise merge into the strongest existing URL after checking links. |
| Pricing versus costs | `/services/pricing/`, `/law-firm-seo-cost/` | Keep both: actual JurisPage offer versus market-wide cost guide. Make the distinction explicit and link both directions. |
| National marketing | Homepage, `/services/`, `/law-firm-seo/` | Homepage owns brand/agency positioning; services is the service directory; SEO owns the SEO engagement. Metro marketing links currently label `/law-firm-seo/` as “law firm marketing services”; point broad marketing context to the correct broad destination. |

**Cannibalization is not yet confirmed.** Multiple pages appearing for a query can be beneficial. Confirm harmful overlap through query/page performance, weekly URL switching, intent equivalence and loss of combined clicks. Content similarity alone does not justify deleting a page.

### 3. P1: Commercial near-wins offer a faster route to qualified traffic

| Page | Historical evidence from prior audit | Next content investment |
|---|---|---|
| SEO cost | 11 clicks; 3,210 impressions; average position 14.2 | Cite pricing assumptions and the claimed industry average; show three real budget scenarios and what is/is not included; connect to published pricing and qualification. Current live page already has updated title, tier table and FAQ—build beyond those completed edits. |
| Scorpion alternative | 2,327 impressions; position 12.2 | Live page has approximately 442 main-text words. Add a practical migration checklist, ownership/contract questions, switching timeline and verified comparable example. Retain fair sourcing and clear differences in firm fit. |
| Content writing | 13,590 impressions; position 24.6 | Demonstrate an attorney-reviewed content workflow, before/after content example, evidence of results and package inclusion. Clarify standalone-service availability. |
| Google Ads | 6,944 impressions; position 29.7 | Separate management fees from media budget; show practice-specific lead economics, qualification and landing-page proof. Link the existing calculator once assumptions are documented. |
| Best SEO companies | 41,288 impressions; position 52.3 | Add transparent selection methodology, dates and primary sources for commercial comparisons; disclose ownership relationship with Juris Digital. Treat as an authority project rather than a quick-win forecast. |
| Law-firm SEO services | 28,115 impressions; position 61.4 | Strengthen proof, authorship, methodology and contextual support links. Pursue specific buying queries before expecting head-term leadership. |

The fresh search-result spot checks show cost guides and provider comparisons competing on the same intents. They are discovery observations, not a standardized US desktop/mobile rank check. No ranking or lead increase is guaranteed.

### 4. P1: Proof and factual precision need strengthening across templates

The claim “68%” appears in **106 sitemap pages**. The metro template describes this as an average increase in signed cases within 12 months, but the reviewed section provides no cohort size, measurement method or link to underlying evidence. Add a documented methodology and relevant case-study citation or replace the aggregate with a verifiable specific result.

`data/intersections.ts` states that a 1% conversion-rate improvement can halve cost per lead. That is only true in particular relative changes (for example 1% to 2%, a one-percentage-point increase), not generally. It also claims settlement/verdict schema helps surface rich snippets; this needs correction against Google's actual supported types. These claims weaken credibility in a specialist market.

FAQ markup is present extensively, but do not budget for FAQ rich results as a growth lever: Google's [eligibility guidance](https://developers.google.com/search/blog/2023/08/howto-faq-changes) restricts them primarily to authoritative government and health sites. Useful FAQs remain valuable content. Validate structured data rather than treating its presence as a pass.

### 5. P1: Revenue attribution and lead delivery still need closure

The new successful-submission events exist in code, but fresh GA4 event counts, key-event configuration, duplication and qualified-lead outcomes could not be checked due to MCP authorization. Contact attribution is saved in the application database. The HubSpot field payload does **not** pass the same stable submission ID, budget routing context beyond existing fields, or full first/last-touch attribution into custom CRM fields. A CRM join and downstream reporting are therefore still needed.

The contact latency patch is live and uses `after()` for delivery. However, the promised durable retry system was **not implemented**: the handler stores delivery results, but there is no durable queued job or automatic failed-delivery retry in that implementation. A timeout or interrupted execution can leave a saved lead without CRM delivery. Add pending delivery state at capture, a durable outbox/worker, bounded retries, idempotency and failure visibility. Verify the post-deployment synthetic test and exclude tests from acquisition metrics. This is a conversion reliability issue, not a ranking factor.

### 6. P2: Trust, internal links and indexing decisions

- `/privacy-policy/` redirects to the homepage. Restore a real, accurate privacy notice and link it near forms/footer; check the actual data practices with the appropriate owner. `/terms/` returns 404, but this guessed route alone does not establish a missing required legal page.
- `/growth-path/`, `/growth-assessment/` and `/calculate-roi-law-firm-ppc-campaign/` return 200, self-canonical and index/follow but are absent from the sitemap and the audited sitemap pages' internal links. Decide which should be public SEO assets. The calculator can be useful if its assumptions and math are transparent; add it to the PPC cluster and sitemap only after that review.
- The SEO guide has one incoming link from the crawled sitemap set; Spanish website article one; local-versus-national guide two. These are unique referring pages, not link counts. Add contextual links between articles, practice pages, service pages and related proof, using reader-relevant anchors.
- The acquisition announcement variants are weakly linked (one or two source pages each). Resolve intent ownership before increasing links to all three.
- Alternate homepage and thank-you route are correctly noindexed. Their missing canonicals are not the same priority as an indexable money-page canonical problem.

## Technical checks that passed, and limits

All **179 sitemap URLs returned 200**, with no redirects, self-referencing canonicals, one H1, title and meta description. No duplicate titles or descriptions and no sitemap noindex were detected. Every sitemap page has at least one internal link from another crawled sitemap page. All internal link targets extracted from sitemap pages were already among the crawled URLs; none returned 404. This does not cover links injected later by JavaScript, images, external links or every historical URL.

Robots allows public crawling and blocks `/api/`; it points to the canonical sitemap. The prior build-time `lastmod` issue is fixed for static pages. News still has a hardcoded February 27 date, which should reflect actual modification history if retained. The crawl observes indexability, **not Google's actual indexed state**.

No new mobile lab/field performance pass was completed. Do not interpret fetch timing as LCP, INP or CLS. Measure the homepage, SEO page, pricing and Market Gap on mobile, plus the actual form journey. Test slow third-party and failed-delivery cases.

## Execution plan

| Order / timing | Deliverable | Owner | Definition of done |
|---|---|---|---|
| 1 — days 1–3 | Reconnect Google MCP and establish acquisition baseline | Analytics + account owner | GA4 property/hostname verified; matched 90/90-day and 28/28-day exports; US non-brand segments; known tests excluded |
| 2 — days 1–7 | Close lead reliability and measurement gaps | Engineering + sales ops | Durable capture and delivery retry verified; stable CRM ID; successful submission, qualified lead, booked meeting and won client reportable by landing page/source |
| 3 — days 1–7 | Approve intent ownership map | SEO lead | Every commercial URL has a primary intent; query/page overlap evidence added; no blanket deletion rules |
| 4 — weeks 1–3 | Upgrade cost, Scorpion, content-writing and PPC pages | SEO + subject expert | Original examples, sourced claims, relevant proof, contextual support links and appropriate CTA; track query clusters before/after |
| 5 — weeks 2–4 | Pilot five metro markets and three practice/service clusters | SEO + editorial | Distinct local evidence and business value; changes measured against matched unedited pages where possible |
| 6 — weeks 2–4 | Restore privacy destination and clarify tool indexing | Engineering + business owner | Real privacy destination; chosen tools linked/sitemapped or intentionally excluded; redundant funnel decision executed |
| 7 — weeks 3–6 | Strengthen proof and internal architecture | Editorial + design | Aggregate claims substantiated; relevant case study on each priority money page; thinly linked support articles connected contextually |
| 8 — weeks 4–8 | Publish one original research asset | Research + outreach | Transparent legal-marketing benchmark with sample, date, method and limitations; pitch relevant legal-industry publications and partners |
| 9 — weeks 6–12 | Expand only proven clusters | SEO + sales | Retention/consolidation decisions based on combined demand, links and qualified leads; reassess 28/56/90-day results |

Use qualified organic leads and organic-sourced won revenue as primary outcomes. Supporting KPIs: US non-brand clicks to commercial pages, query clusters reaching top 10/top 3, qualified-lead rate by landing page, meeting rate, opportunity rate and delivery failures. Set numeric growth targets after the fresh baseline and sales close rates are available; current data cannot support a credible revenue forecast.

## Exact MCP follow-up when access is restored

1. Discover and verify JurisPage's GA4 property and exact GSC property. End the first GSC window October 4 to avoid recent incomplete data; compare July 7–October 4 with April 8–July 6 (90 days each), and September 7–October 4 with August 10–September 6 (28 days each). Check actual data availability first.
2. GSC: totals by date; query; page; query+page; query+page+country; device. Fetch up to 25,000 rows and explicitly label truncation if the limit is reached. This MCP exposes no row offset or filter inputs; segment returned country rows carefully and do not claim full coverage of anonymized queries.
3. For shortlisted overlapping clusters, compare weekly query/page rows and combined clicks. Distinguish alternate winners, harmless coverage and persistent dilution; calculate CTR/position weighted by impressions, not averages of averages.
4. GA4: dimensions `sessionDefaultChannelGroup`, `landingPagePlusQueryString`, `deviceCategory`, `country`, `hostName`, `eventName` in compatible separate reports. Metrics include sessions, engagedSessions, engagementRate, keyEvents and eventCount as appropriate. Use channel+landing-page reports for organic segmentation; event reports separately for measurement validation. Do not sum non-additive users across pages.
5. Add US non-brand opportunities, falling pages, near-page-one queries, actual conversions and a final URL-by-URL decision column to the inventory. Inspect index coverage and selected URLs in GSC separately; the available reporting MCP does not expose URL Inspection or coverage.

Until those reports succeed, all ranking-driven consolidation choices remain provisional. The live technical and template findings above are independently actionable.
