// Shared Open Graph fields. Next.js replaces (not merges) the layout's
// openGraph object when a page defines its own, so every page spreads this.
// Pages with their own share image can override `images`.
export const ogBase = {
  type: "website",
  siteName: "JurisPage",
  locale: "en_US",
  images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "JurisPage: law firm marketing that gets cases, not just clicks" }],
};
