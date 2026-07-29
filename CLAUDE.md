# JurisPage — Working Notes

> Loaded automatically by Claude Code in every session. Keep it short. Anything that needs to be true across sessions lives here.

## The offer, right now

**JurisPage sells exactly one product to end clients, and as of 2026-07-20 that product is publicly named "JurisPage" (the brand is the product).**

The product was previously marketed on jurispage.com as "Launchpad." Operator decision on 2026-07-20: all client-facing copy calls it **JurisPage** (or "the JurisPage package/plan"). Never write "Launchpad" in prospect-visible copy, emails, or metadata. Internally it is still the Juris Digital Launchpad package (jurisdigital.com/services/launchpad/) resold under the JurisPage brand. On 2026-07-20 jurisdigital.com's client-facing copy was also renamed to "JurisPage" (page title, blog mentions, llm-info pricing tiers), so "Launchpad" survives only in URLs, slugs, and code. Internal plumbing keeps the old name: the `/launchpad/` route, `slug: "launchpad"` in data files, the `LaunchpadQuote` Prisma model, and the `LaunchpadCalculator` component. Do not rename routes or the DB model without an explicit operator decision (SEO and migration impact). JurisPage and Juris Digital are the same company after the 2026 acquisition. JurisPage is the small-firm front door; Juris Digital is the established-firm tier.

That means:

- Any pricing page, calculator, service card, or FAQ on jurispage.com that describes what a client can buy from JurisPage should describe **the JurisPage package** (brand design + StoryBrand website + GBP + Yelp + Apple Maps + citations + weekly social + tracking, starting at $2,000/mo over a 24-month engagement, full setup in 45 days, no upfront fee).
- Firms whose budget or stage exceeds the JurisPage package get handed off to **Juris Digital** (publicly framed as "starting at $15,000+/mo" on jurispage.com since 2026-07-29; anyone under that stays JurisPage). On jurisdigital.com, this upper-tier product is specifically called **Ascend** (at `/services/ascend/`), but on jurispage.com we refer to it generically as "Juris Digital" per decision #3 below. Don't rename to "Ascend" on jurispage.com without an explicit product decision from the operator. We do not sell a "JurisPage Pro" tier. If you see that name anywhere, it's stale.
- Individual service pages (`/law-firm-seo/`, `/google-ads-for-law-firms/`, `/local-seo-for-law-firms/`, `/law-firm-content-writing/`, `/law-firm-email-marketing/`, `/law-firm-websites/`, `/generative-engine-optimization-legal-marketing/`, `/ai-chatbot-for-law-firm-website/`, `/bing-ads-for-lawyers/`) exist for SEO and lead-gen, but every pricing tile on them should route to the JurisPage package or Juris Digital — not a standalone service SKU.

## Source of truth

Canonical offer spec: [`docs/launchpad-source-of-truth.md`](./docs/launchpad-source-of-truth.md). Pulled from jurisdigital.com on 2026-04-23. Treat this as authoritative for every deliverable, price point, timeline, and positioning decision.

When editing any copy that mentions what JurisPage sells, verify against that doc before writing. If the doc and the page disagree, the doc wins unless the user explicitly changes the product.

The companion audit report at [`docs/offer-audit-report.md`](./docs/offer-audit-report.md) is a **historical snapshot** from 2026-04-23, written *before* the alignment pass (commit db6bf92). It documents what was misaligned at that point and what was fixed. Do not treat it as a current-state description.

## Eight locked product decisions (2026-04-23)

All eight resolved to "match the Juris Digital source." Do not reintroduce the old positioning without the user explicitly changing the product.

1. **Contract:** 24-month engagement (not month-to-month). Framed as "no upfront fee, costs spread across the 24 months."
2. **Brand Design:** included in the $2,000 base (logo, typography, photography, graphics, social assets, brand guidelines). Not a $999 add-on.
3. **Upper tier name:** Juris Digital (not "JurisPage Pro").
4. **Upper tier price:** ~~$5,000 to $50,000+/mo~~ **Superseded 2026-07-29 (Tom Tran + Josh funnel decisions):** all jurispage.com copy says Juris Digital is "starting at $15,000+/mo" so it hard qualifies. Never show the $5,000 number or the $5K–$50K range for JD. Anyone under $15K stays JurisPage.
5. **Website timeline:** 45 days for full setup (website + GBP + Yelp + Apple Maps + citations + social + tracking). Not 30 days.
6. **Differentiator framing:** advertise automation + generative AI + **12 years of legal SEO expertise** as the price-justification. "12 years" is the canonical number on jurisdigital.com/services/launchpad/. Copy about Casey Meraz personally (about-us, blog bios) can use "15 years" or "16 years" since that references his individual tenure, not the Juris Digital company expertise claim.
7. **Target buyer copy:** "small or startup law firms with little to no online presence" (not "1–4 attorneys" as a hard gate). The LaunchpadCalculator still forks 5+ attorneys to Juris Digital because the budget math exceeds the JurisPage package's $2K–$4K range, but copy shouldn't exclude larger firms categorically.
8. **StoryBrand-driven design:** included on every JurisPage site. Not a premium-tier upsell.

## Funnel decisions (2026-07-29, Tom Tran + Josh)

One report product: the **Market Gap report** (`/see-my-market-gap/`). Delivery is **human**, following the JD Market Intelligence Report (MIR) process: Steve K builds the full report for qualified leads, Armon delivers it and uses delivery to book the meeting (MQL > SAL when the report sends > SQL when they engage). Tom + Reyin own the HubSpot side (task/SLA timers keyed off `form_source`, 5-minute first-response email for Contact).

- **No automated full-report delivery to leads.** The `/api/market-gap/approve/` route (Approve button + auto-email) was deleted on 2026-07-29. Do not re-add an Approve/auto-send flow. The 60-second instant teaser stays. Generating the full report internally as a draft for Steve is fine; sending it to the lead automatically is not. No "delivered to your inbox within 24 hours" promises anywhere in the market-gap funnel.
- **Growth Report is dead as a standalone deliverable.** `/growth-report/` now sells the Market Gap report (embeds `MarketGapForm`). Its form (`GrowthReportForm`) and API route (`/api/growth-report/`, which sent a 24-hour-promise confirmation email) were deleted.
- **Growth Assessment is dead.** `/growth-assessment/` was reframed as another Market Gap door. `GrowthAssessmentForm` and `/api/growth-assessment/` (which promised a "45-minute Growth Strategy Session") were deleted. The "Growth Strategy Session" promise and the "$5K+ to dominate" qualification framing are banned sitewide.
- **Reframing any lead page into another door to the Market Gap funnel is always fine; new deliverable promises are not.**
- **Contact page** (`/contact/`) is a straight consultation ask: "Ready for a change? Let's explore your options." No pre-call audit promise, no "plan tailored to you" language. Keep the form's qualification fields. Armon owns Contact leads. Contact sends the lead no email from our side (HubSpot handles first response).

## Dev/ops notes

- **Hosting:** Vercel (auto-deploys from `main`). Commit and push every edit — that's how changes go live.
- **Stack:** Next.js 16, TypeScript, Tailwind.
- **Build command:** `npm run build` — run this before commits if touching anything non-trivial.
- **Prisma schema:** `LaunchpadQuote` still has an `addonLogo` field. It's always written as `false` now (logo is bundled into base). Safe to leave the column for data-history purposes; do not resurrect a logo add-on in the UI.
- **`/api/quote` email and `LaunchpadCalculator`:** these are the two files that actually commit pricing to prospects. Any change to deliverables, timeline, or terms must update both.

## Copy rules

- **No em dashes.** Use commas, periods, or parens.
- **No AI-sounding filler** ("seamless," "robust," "leverage," "unlock," "in today's fast-paced world"). Prefer concrete claims.
- **Don't invent new tier names.** JurisPage sells one package, publicly named JurisPage. Juris Digital is the handoff for larger firms. That's the whole hierarchy.
- **Keep Juris Digital mentions minimal.** This site is for JurisPage. Mention Juris Digital only when genuinely needed:
  - Upsell routing: a prospect's budget/stage exceeds the JurisPage package ($4K/mo cap).
  - Acquisition/trust story: "JurisPage joined the Juris Digital family," footer, about-us.
  - Specific "difference between JurisPage and Juris Digital" FAQ on /services/pricing/ and /launchpad/.
  Avoid mentioning JD in service-page FAQ answers about operational details (website timeline, chatbot pricing, citation maintenance). Those questions are about the JurisPage package, not the upsell path.
- **Don't conflate the brands.** No "JurisPage + Juris Digital Team" sign-offs, no "from: Juris Digital <hello@jurispage.com>" email headers, no dual-brand footers. JurisPage is the site identity; Juris Digital is the parent company. Keep them visibly separate.
- **Pricing tiles on individual service pages** (law-firm-content-writing, local-seo, email-marketing, generative-engine-optimization, law-firm-websites, bing-ads) should show **one JurisPage package tile** and a compact upsell sentence below pointing to Juris Digital Ascend for bigger budgets. Do not display dual parallel tiles that imply JurisPage offers both products.
