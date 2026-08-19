// Metro × service page slugs to noindex AND exclude from sitemap.
//
// Decision basis: Google Search Console data 2026-04-15 to 2026-05-13.
// Pages on this list had near-zero impressions despite being in the sitemap
// for weeks/months — Google has effectively rejected them. Keeping them
// indexed dilutes domain quality signals (HCU pattern: high ratio of
// templated programmatic content with no traction).
//
// Behavior:
// - Page still renders (returns 200) so any external links don't 404.
// - <meta name="robots" content="noindex,follow"> tells Google to drop
//   them from the index but keep crawling internal links.
// - Pages are removed from sitemap.xml so they aren't resubmitted.
//
// To revive a specific city, remove its slug from this set and rewrite
// the page with substantive local content (real CPC data, named local
// competitors, neighborhoods, court systems).

export const METRO_NOINDEX_SLUGS: ReadonlySet<string> = new Set([
  "law-firm-website-design-san-diego",
  "law-firm-seo-tampa",
  "law-firm-seo-new-york",
  "google-ads-lawyers-new-york",
  "law-firm-website-design-new-york",
  "law-firm-marketing-new-york",
  "law-firm-seo-los-angeles",
  "google-ads-lawyers-los-angeles",
  "law-firm-website-design-los-angeles",
  "law-firm-seo-chicago",
  "law-firm-website-design-chicago",
  "law-firm-marketing-chicago",
  "law-firm-seo-houston",
  "google-ads-lawyers-houston",
  "law-firm-website-design-houston",
  "law-firm-marketing-houston",
  "law-firm-seo-phoenix",
  "google-ads-lawyers-phoenix",
  "law-firm-website-design-phoenix",
  "law-firm-seo-philadelphia",
  "google-ads-lawyers-philadelphia",
  "law-firm-website-design-philadelphia",
  "law-firm-marketing-philadelphia",
  "law-firm-seo-san-antonio",
  "law-firm-website-design-san-antonio",
  "law-firm-marketing-san-antonio",
  "law-firm-seo-san-diego",
  "google-ads-lawyers-san-diego",
  "law-firm-marketing-san-diego",
  "google-ads-lawyers-dallas",
  "law-firm-marketing-dallas",
  "google-ads-lawyers-san-jose",
  "law-firm-marketing-san-jose",
  "law-firm-seo-austin",
  "google-ads-lawyers-austin",
  "law-firm-website-design-austin",
  "law-firm-marketing-austin",
  "law-firm-seo-charlotte",
  "google-ads-lawyers-charlotte",
  "law-firm-marketing-charlotte",
  "law-firm-seo-indianapolis",
  "google-ads-lawyers-indianapolis",
  "law-firm-website-design-indianapolis",
  "law-firm-marketing-indianapolis",
  "law-firm-seo-san-francisco",
  "google-ads-lawyers-san-francisco",
  "law-firm-website-design-san-francisco",
  "law-firm-marketing-san-francisco",
  "law-firm-seo-seattle",
  "google-ads-lawyers-seattle",
  "law-firm-website-design-seattle",
  "law-firm-marketing-seattle",
  "law-firm-seo-denver",
  "google-ads-lawyers-denver",
  "law-firm-website-design-denver",
  "law-firm-marketing-denver",
  "law-firm-seo-nashville",
  "law-firm-website-design-nashville",
  "law-firm-marketing-nashville",
  "google-ads-lawyers-las-vegas",
  "law-firm-website-design-las-vegas",
  "law-firm-marketing-las-vegas",
  "law-firm-seo-atlanta",
  "google-ads-lawyers-atlanta",
  "law-firm-website-design-atlanta",
  "law-firm-marketing-atlanta",
  "google-ads-lawyers-portland",
  "law-firm-website-design-portland",
  "law-firm-website-design-minneapolis",
  "law-firm-marketing-minneapolis",
  "google-ads-lawyers-tampa",
  "law-firm-website-design-tampa",
  "law-firm-seo-miami",
  "google-ads-lawyers-miami",
  "law-firm-marketing-miami",
  "google-ads-lawyers-washington-dc",
  "law-firm-website-design-washington-dc",
  "law-firm-seo-boston",
  "google-ads-lawyers-boston",
  "law-firm-marketing-boston",
]);
