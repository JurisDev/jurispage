# City-page decision and implementation

> Evidence retained from October 7. See [October 8 implementation](../sitewide-audit-2026-10-08/implementation.md) for current status: explicit 301s replace the preliminary 308 configuration, additional duplicate pages are consolidated, and clean production build/HTTP checks now pass.

Reviewed 7 October 2026. Recommendation: consolidate the 100 city/service templates into four national service destinations. Changes are local on `codex/city-consolidation` and not deployed.

## Actual traffic evidence

Google MCP still returned `invalid_grant`; the figures below were read directly from the signed-in Google reporting interfaces, not inferred from the crawl.

Search Console property: `sc-domain:jurispage.com`, Web search, all countries/devices. Page regex matched exactly the four service prefixes and 25 cities defined in `data/metros.ts`, allowing both trailing-slash variants and both hostnames.

| Evidence | Result |
|---|---|
| 5 July–4 October 2026, all city pages | 3 clicks; approximately 12,200 impressions; average position 31.5 |
| Same window, whole property | 142 clicks; approximately 175,000 impressions |
| City pages as share of sitemap | 100/179 = 55.9% |
| City clicks relative to whole-property clicks | Approximately 2.1%; page-filter aggregation differs from property aggregation |
| Available 16-month window, 5 June 2025–4 October 2026 | 9 clicks; approximately 29,400 impressions; average position 29.7 |
| External-links report | 2,593 links to 14 reported targets; no city page listed |

Three-month clicks: Google Ads Minneapolis 1, Google Ads Los Angeles 1, website design Portland 1. The other 97 current city URLs had no reported clicks. Only 39 URL rows had impressions in this window.

Sixteen-month click-bearing rows: old www Charlotte website design 2; old www Los Angeles marketing 1; old www San Jose SEO 1; old www San Jose website design 1; current Minneapolis Ads 1; current Las Vegas website design 1; current Los Angeles Ads 1; current Portland website design 1. The old San Jose website-design row averaged position 8.1 on 273 impressions but earned only one click; this deserves a migration watch, not retention of the entire template network. The window does not mean every current template has existed unchanged for 16 months.

GSC links are a sample, not proof that no other backlink exists. Most reported equity is concentrated on the homepage (2,552 links), SEO cost (12), SEO (6), websites (5), and local SEO (5).

GA4 property 528038581, Jurispage.com, Pages and screens, Page path and screen class, all users, 9 July–6 October 2026:

- All 100 city paths appeared in the URL table: 214 combined views out of 4,481 sitewide views (4.8%). These are page views, not sessions or organic visits.
- 93 pages had exactly two views. 95 pages showed 0s average engagement per active user. Do not infer that zero rounded engagement means literally no human activity.
- Exceptions by views: Atlanta websites 8 (3s average engagement), San Antonio websites 4 (2s), Portland websites 3 (0s), Denver marketing 3 (2s), Minneapolis Ads 3 (2s), Los Angeles Ads 4 (6s), Chicago Ads 3 (0s).
- Zero key events sitewide in this historical period. This is a measurement limitation, NOT evidence of zero leads or zero clients. The uniform two-view pattern could include automated/internal traffic; its origin was not established.

## What “overlap” means

1. **Across cities:** SEO Dallas and SEO Denver use the same sales template with geography substituted. A different city query can be a legitimate distinct intent, so similarity alone is not a penalty or cannibalization finding. These pages lack enough unique local evidence to justify maintaining 25 versions of each service given their results.
2. **Within one city:** a marketing page promises SEO, ads, local search and websites, while three additional service pages repeat much of the same offer, proof and CTA. For example, the crawl measured Los Angeles marketing versus Ads at 0.612 five-word-shingle Jaccard similarity. That is a lexical similarity score, NOT “61.2% duplicate content.”
3. **Against national services:** broad queries such as “law firm marketing services” and “law firm marketing agency” appeared in the city-filtered GSC query report (129 and 113 impressions respectively, zero reported clicks). City pages are therefore not serving only geographic searches. This establishes intent overlap, but we did not establish query-by-query URL switching or a causal loss of national rankings.

The decision is economic: 100 maintained pages produce almost no search visits and little measured engagement, while commercial national pages already have better evidence of demand. Consolidation concentrates content, proof, links, and future effort. It does not guarantee higher rankings.

Keep the national SEO, local SEO, pricing/cost, and content-writing pages distinct: buyers have different tasks (hire an SEO provider, improve Maps visibility, evaluate investment, buy content). Clarify their focus and link them instead of merging all related subjects.

## Redirect mapping and protection

| Retired family | Final destination |
|---|---|
| `/law-firm-seo-{city}/` | `/law-firm-seo/` |
| `/google-ads-lawyers-{city}/` | `/google-ads-for-law-firms/` |
| `/law-firm-website-design-{city}/` | `/law-firm-websites/` |
| `/law-firm-marketing-{city}/` | `/services/` |

- Exact URL mappings only, not broad wildcard rules that could capture `/law-firm-seo-cost/`.
- Permanent Next.js redirects (308). Both slash variants are configured. Host and trailing-slash normalization must still be checked on deployment; an existing www-to-apex host hop may precede the content redirect.
- Legacy suburb URLs now target the final national service directly, avoiding suburb → city → national chains.
- Removed city URLs from sitemap and static generation; retained a defensive permanent redirect in the dynamic route. Template source remains recoverable.
- The four destinations were 200, indexable, self-canonical pages in the live crawl. Services now explicitly explains nationwide remote service with market-specific planning.
- Retain redirects indefinitely where practical (Google recommends generally at least one year). Do not block retired URLs in robots.txt or use Search Console removals.
- No claim of zero ranking volatility. Google can consolidate signals with relevant permanent redirects, but city-specific relevance and rankings may change.

Source: [Google migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Commercial and navigation changes

- SEO cost: specific client-acquisition-cost explanation and clearly labeled hypothetical math; contextual Wilson case study; removed an unsourced survey-average claim.
- Content writing: contextual Wilson proof with an explicit distinction between combined SEO results and isolated writing results; links to cost and SEO.
- Scorpion comparison: migration/access/measurement checklist, contextual Sands case study explicitly NOT presented as a verified Scorpion migration, less absolute CTA promise.
- Corrected Wilson's +1,851% stat label from inquiries to website traffic to match its existing published results narrative. No new performance claims invented.
- Desktop service/practice navigation now supports click/keyboard toggling, Escape, focus-leave closure, and inert closed panels. Hover behavior retained.

## CRM findings

The existing [SEO Test Lead](https://app.hubspot.com/contacts/23597402/record/0-1/253623252382?utm_source=app_12360546_mcp&utm_medium=ai_agent&utm_campaign=search) is present and assigned to owner ID 526732801. Its lifecycle value 265368665 resolves to Contact, not Lead or Sales Qualified Lead. This verifies contact creation/assignment for that test; it does not verify all workflows, notifications, or closed-client attribution. No new test lead was sent and no CRM record was changed.

Fixed a concrete downstream defect in code: the contact notification supplies 17 Slack fields, but Slack allows 10 per section. Fields now split into sections of 10 and 7, use bounded plain text, and respect field/header size limits. A mocked test passed without sending a message. [Slack section limits](https://docs.slack.dev/reference/block-kit/blocks/section-block).

Contact submissions now persist pending delivery status before background delivery starts, making interrupted work distinguishable from delivered work. This is observability, not a durable retry queue. Remaining CRM work: verify/define lifecycle qualification, map first/last-touch attribution into confirmed CRM properties, join leads to deals/won clients, and implement idempotent retry/reconciliation for failed or stale pending delivery. Do not blindly retry a potentially successful form submission.

## Verification and release gates

- Current production HTTP crawl: 179 unique internal anchor destinations, all 200 with redirects disabled. Therefore no existing redirecting internal targets were found in the scoped crawl.
- Consolidation checks: all 100 cities/services have both exact permanent URL variants; no literal redirect chains; four canonical destinations; no retained sitemap page links to a configured literal redirect source; SEO cost remains untouched by city mappings.
- Slack mocked payload test: passed, 17 fields split 10 + 7; no outbound notification sent.
- Syntax transpilation passed for all 11 changed TypeScript/TSX files. `git diff --check` passed. Full `tsc --noEmit` stalled for more than four minutes without output, with an open TypeScript library declaration file and no observed CPU activity; it was terminated. This is not a passed type check or build. Total configured redirect rules: 994.
- Before release: successful type/build checks, rendered mobile/desktop QA, test all 100 deployed redirects and representative old www/suburb URLs, verify sitemap excludes retired URLs and target pages stay indexable. Do not describe local checks as deployed verification.
- After release: compare combined retired+destination clicks for 28-day windows; watch the eight historical click-bearing URL variants and target indexing; judge success using qualified leads and won clients once measurement is reliable, not lower indexed-page count.

## Priority order

1. Safely release and HTTP-verify this consolidation plus navigation/notification fixes.
2. Verify successful-submit key events and CRM lead-to-won attribution. Do not mark a contact-page view as a lead.
3. Strengthen commercial near-wins (cost and Scorpion first), then content writing and Ads; measure qualified inquiry rate and sales acceptance.
4. Resolve the privacy-policy homepage redirect with owner-approved policy text. Do not invent legal assurances or assume another brand's policy covers this site.
5. Build genuinely differentiated proof/content around target firms and markets; only recreate individual city landing pages if unique local demand and proof justify them.
