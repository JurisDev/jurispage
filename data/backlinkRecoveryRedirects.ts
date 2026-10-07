import type { Redirect } from "next/dist/lib/load-custom-routes";

// Ahrefs-backed exact paths, reviewed 2026-10-07. Keep before legacy catch-alls.
// Next.js compiles redirects to accept both trailing-slash variants.
// Evidence and unresolved URLs: docs/releases/backlink-recovery-20261007/.
export const backlinkRecoveryRedirects: Redirect[] = [
  {
    "source": "/law-firm-marketing-strategy",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2013/website-development/scales-of-justice-gavel-done-avoiding-a-cliche-law-firm-logo",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2017/law-firm-internet-marketing/write-a-killer-law-firm-marketing-plan",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/seo/ppc-seo-or-both-legal-marketing-strategy-demystified",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/seo/law-firm-seo",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/law-firm-marketing/law-firm-marketing-strategy",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/write-a-killer-law-firm-marketing-plan",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/elevate-law-firm-seo/law-firm-copywriting",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2019/law-firm-internet-marketing/law-firm-internet-marketing-strategies",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/services/law-firm-ppc",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/services/seo-for-law-firms",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2013/website-development/what-does-your-font-say-about-your-firm-the-best-law-firm-logo-fonts",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2019/law-firm-internet-marketing/law-firm-marketing-101-email-marketing",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/law-firm-internet-marketing/law-firm-marketing-2019",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/law-firm-internet-marketing/email-marketing-for-lawyers-a-legal-marketing-guide",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2014/law-firm-internet-marketing/%E2%80%8Beffective-email-marketing-for-law-firms",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2018/seo/top-family-law-marketing-strategies-for-2018",
    "destination": "/family-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2014/website-development/5-tips-to-writing-better-attorney-website-copy-why-no-one-wants-to-read-your-resume",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2019/website-development/ada-compliance-in-law-firm-websites-what-do-you-need",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2014/seo/search-engine-optimization-vs-internet-marketing-google-adwords-for-law-firms",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/results",
    "destination": "/case-studies/",
    "permanent": true
  },
  {
    "source": "/2014/website-development/scorpion-design-law-firm-website-design-internet-marketing-and-seo-review",
    "destination": "/scorpion-legal-marketing-alternative/",
    "permanent": true
  },
  {
    "source": "/services/attorney-logo-design",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/services/website-design-for-attorneys",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2013/internet-marketing/how-do-google-adwords-and-search-engine-ads-work-a-walkthrough-for-beginners",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2014/internet-marketing/%E2%80%8Beffective-email-marketing-for-law-firms",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/email-marketing/email-marketing-for-lawyers-101-campaign-logistics",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/email-marketing/email-marketing-for-lawyers-101-email-software",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/services/email-marketing",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2014/internet-marketing/questions-to-ask-your-attorney-ppc-firm",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2018/law-firm-internet-marketing/email-marketing-software-for-lawyers",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/email-marketing/email-marketing-for-lawyers-101-email-lists-and-segments",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/website-development/modern-law-firm-website-design-in-2019-7-things-your-website-needs",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/services/attorney-website-design-for-new-practices",
    "destination": "/launchpad/",
    "permanent": true
  },
  {
    "source": "/2013/seo/7-website-mistakes-law-firms-make",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/lawyer-website-design-cost",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/2017-legal-marketing-guide",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/law-firm-internet-marketing/how-to-win-at-legal-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2013/website-development/how-bad-is-your-law-firm-website-shocking-new-statistics",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2014/website-development/setting-up-your-law-firm-email-from-scratch-a-step-by-step-guide",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/how-to-win-at-legal-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/email-marketing/email-marketing-for-lawyers-101-email-workflow-tips",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/client-testimonials",
    "destination": "/case-studies/",
    "permanent": true
  },
  {
    "source": "/services/attorney-marketing-campaign-management",
    "destination": "/services/",
    "permanent": true
  },
  {
    "source": "/google-adwords-lawyers",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/law-firm-marketing-budget",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/law-firms-online-presence",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2013/law-firm-internet-marketing/how-do-google-adwords-and-search-engine-ads-work-a-walkthrough-for-beginners",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2013/seo/law-firm-seo-getting-to-the-top-of-google-search-results-for-your-law-firm",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2016/law-firm-internet-marketing/reasons-why-your-web-marketing-campaign-is-failing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/website-development/should-you-build-your-law-firm-website-with-a-do-it-yourself-builder-or-a-web-design-agency",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2019/email-marketing/email-marketing-for-lawyers-101-why-email-marketing",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/category/email-marketing",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/services/local-search-for-attorneys",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/how-to-start-a-law-firm",
    "destination": "/startup-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2014/seo/creating-a-law-firm-website-that-brings-in-new-clients",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2014/seo/new-tools-for-lawyers-attorney-and-lawyer-become-available",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2014/website-development/ilawyermarketing-law-firm-marketing-review",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/mobile-is-not-a-trend-its-here-to-stay",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2017/law-firm-internet-marketing/2017-legal-marketing-guide",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/law-firm-internet-marketing/google-adwords-gets-a-new-update-how-will-this-affect-law-firm-marketing",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2017/law-firm-internet-marketing/is-your-law-firm-website-built-in-flash-if-so-redesign-it-now",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2018/law-firm-internet-marketing/law-firm-email-newsletter-marketing",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2018/website-development/making-one-of-the-best-law-firm-websites-an-interview-with-enright-law",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/services/attorney-website-redesign-service",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/marketing-agency-for-law-firm",
    "destination": "/services/",
    "permanent": true
  },
  {
    "source": "/2014/law-tech-startups/meddle-review-a-new-platform-that-reinvents-blogging",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2016/weekly-edge/effective-contact-forms-and-contact-pages",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2017/events/webinar-marketing-a-family-law-practice-in-2017",
    "destination": "/family-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/email-marketing-for-lawyers-a-legal-marketing-guide",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/is-your-law-firm-website-built-in-flash-if-so-redesign-it-now",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2018/law-firm-internet-marketing/how-to-create-an-amazing-law-firm-marketing-plan-webinar",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/email-marketing/email-marketing-for-lawyers-101-content",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/law-firm-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/services/attorney-website-optimization",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/services/branding-for-attorneys",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/services/clio-integrated-attorney-websites",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/services/law-firm-boost-marketing",
    "destination": "/services/",
    "permanent": true
  },
  {
    "source": "/local-citations-law-firms",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/platform",
    "destination": "/launchpad/",
    "permanent": true
  },
  {
    "source": "/seo-for-family-law",
    "destination": "/family-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2014/law-firm-internet-marketing/questions-to-ask-your-attorney-ppc-firm",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2015/law-practice-management/your-attorney-biography-the-most-important-argument-you-will-make",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/new-change-to-adwords-can-mean-higher-click-through-rates",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/reasons-why-your-web-marketing-campaign-is-failing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/3-reasons-your-law-firm-needs-a-good-website",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/should-i-trust-a-lawyer-that-does-not-have-a-website",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/what-makes-one-website-the-best-lawyer-website",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/why-do-so-many-law-firm-websites-look-the-same",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/google-adwords-gets-a-new-update-how-will-this-affect-law-firm-marketing",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/its-a-trap-legal-marketing-pitfalls-to-avoid",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/what-a-law-firm-needs-to-know-about-their-website-interview-at-aba-techshow",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2017/law-firm-internet-marketing/its-a-trap-legal-marketing-pitfalls-to-avoid",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/law-firm-internet-marketing/what-a-law-firm-needs-to-know-about-their-website-interview-at-aba-techshow",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2018/internet-marketing/law-firm-internet-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/bankruptcy-lawyer-websites",
    "destination": "/bankruptcy-lawyer-marketing/",
    "permanent": true
  },
  {
    "source": "/category/law-firm-internet-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/pricing/seo",
    "destination": "/law-firm-seo-cost/",
    "permanent": true
  },
  {
    "source": "/services/blogging-for-lawyers",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/how-marketing-helps-law-firms-succeed",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/local-seo-for-lawyers",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/online-marketing-for-lawyers",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/types-of-keywords-law-firm-seo",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2014/internet-marketing/does-pay-per-click-advertising-make-sense-for-my-law-firm",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2014/website-development/why-image-sliders-are-terrible-for-your-law-firm-website",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2015/seo/reasons-not-to-feature-a-badge-on-your-law-firm-website",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/seo/blogging-and-seo-for-lawyers-video",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2016/seo/i-can-get-you-to-page-1-of-google-is-a-lie",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/why-your-law-firm-needs-a-mobile-website",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2018/internet-marketing/email-marketing-software-for-lawyers",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2018/internet-marketing/law-firm-email-newsletter-marketing",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/real-estate-attorney-websites",
    "destination": "/real-estate-lawyer-marketing/",
    "permanent": true
  },
  {
    "source": "/10-ways-differentiate-law-firm-examples",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/anatomy-of-a-perfect-law-firm-landing-page",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/free-consultation",
    "destination": "/contact/",
    "permanent": true
  },
  {
    "source": "/google-my-business-law-firms",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/how-to-get-more-clients-for-your-law-firm",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/law-firm-website-design-cost",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/seo-criminal-defense-lawyers",
    "destination": "/criminal-defense-lawyer-marketing/",
    "permanent": true
  },
  {
    "source": "/2013/seo/buried-website-increase-your-search-engine-visibility-with-these-seo-tools",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2013/seo/get-new-clients-now-sign-up-for-an-attorney-directory-service-for-your-law-firm",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2013/seo/seo-expert-using-getlisted-to-increase-your-visibility-with-local-seo",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2013/website-development/5-internet-marketing-tips-your-law-firm-needs",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2014/law-firm-internet-marketing/does-pay-per-click-advertising-make-sense-for-my-law-firm",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2014/seo/seo-expert-law-firm-tips-to-better-search-engine-optimization",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2014/uncategorized/search-engine-optimization-vs-internet-marketing-google-adwords-for-law-firms",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/google-removes-ads-from-the-search-sidebar",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/law-blog-writing",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/new-changes-in-google-ads-may-affect-your-clicks-and-spend",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/video-on-law-blogging",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2016/law-firm-internet-marketing/google-removes-ads-from-the-search-sidebar",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/law-firm-internet-marketing/new-change-to-adwords-can-mean-higher-click-through-rates",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/google-again-makes-it-harder-to-distinguish-ads-from-organic-results",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2017/internet-marketing/write-a-killer-law-firm-marketing-plan/embed",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2018/internet-marketing/rebranding-for-your-law-firm",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2019/law-firm-internet-marketing/15-law-firm-internet-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/law-firm-marketing-101/law-firm-marketing-101",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/seo/seo-guide-for-law-firms",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/category/website-development",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/family-lawyer-websites",
    "destination": "/family-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/home",
    "destination": "/",
    "permanent": true
  },
  {
    "source": "/portfolio-jp-classic/law-office-of-mitchell-khosrova-jurispage-law-firm-website-design-portfolio",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/pricing/email-marketing",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/elevate-law-firm-seo",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/google-reviews-law-firms",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/how-to-get-clients-as-a-lawyer",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/keyword-research-for-lawyers",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/law-firm-marketing-plan-pdf",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/legal-content",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/local-seo-important-law-firms",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/local-seo-worth-it",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/marketing-for-employment-law-firms",
    "destination": "/employment-lawyer-marketing/",
    "permanent": true
  },
  {
    "source": "/2013/seo/is-your-law-firm-in-google-boost-your-lawyer-seo-with-these-tips",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2013/seo/seo-what-a-user-friendly-glossary-of-search-engine-optimization-terms",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2013/website-development/what-does-your-font-say-about-your-firm-the-best-law-firm-logo-fonts/embed",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2013/website-development/why-your-law-firm-needs-a-great-website-today",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2014/internet-marketing/discover-your-new-client-referral-sources-with-call-tracking",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2014/internet-marketing/doing-law-firm-ppc-right-part-1-7-ways-that-lose-prospective-clients",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2014/law-firm-internet-marketing/discover-your-new-client-referral-sources-with-call-tracking",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2014/website-development/10-questions-to-ask-before-hiring-a-law-firm-website-designer",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2014/website-development/5-tips-to-writing-better-attorney-website-copy-why-no-one-wants-to-read-your-resume/embed",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2014/website-development/why-submit-is-terrible-for-contact-forms",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2015/seo/law-blogging-when-other-lawyers-are-your-target-audience",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2015/seo/seo-for-lawyers-interview-with-top-seo-expert",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2015/website-development/how-your-law-firm-website-is-leaking-traffic-and-how-to-fix-it",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2015/website-development/is-your-website-bio-hurting-your-business",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2015/weekly-edge/weekly-edge-6-law-firm-logos",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2015/weekly-edge/weekly-edge-7-seo-resources-for-lawyers",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2015/weekly-edge/weekly-edge15-roi-and-metrics-for-lawyers",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/3-reasons-other-than-marketing-to-have-a-great-looking-law-firm-website",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/automated-law-firm-email-marketing-video",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/building-a-lawyer-ppc-campaign-that-gets-you-clients",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/is-ppc-the-most-predictable-medium-for-lawyer-marketing",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/internet-marketing/save-your-attorney-ppc-campaign",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/law-firm-internet-marketing/save-your-attorney-ppc-campaign",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/law-practice-management/expert-law-firm-growth-advice",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2016/seo/law-firm-seo-competition",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2016/seo/online-reviews-for-lawyers-video",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/4-reasons-your-mid-sized-law-firm-needs-a-better-web-presence",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/6-elements-your-law-firm-website-needs",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/website-development/how-to-make-your-law-firm-website-productive",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/weekly-edge/5-tips-to-ace-local-lawyer-marketing",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/weekly-edge/analytics-for-lawyers-5-areas-to-focus-on",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2016/weekly-edge/crafting-great-landing-pages-for-your-law-firm",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2016/weekly-edge/for-lawyers-publishing-content-this-is-why-no-ones-reading-it",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2016/weekly-edge/legal-marketing-mistakes-to-avoid",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2016/weekly-edge/seo-for-lawyers-link-building-101",
    "destination": "/blog/linkable-assets-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2016/weekly-edge/why-firms-who-do-email-marketing-well-are-winning",
    "destination": "/law-firm-email-marketing/",
    "permanent": true
  },
  {
    "source": "/2017/seo/ppc-seo-or-both-legal-marketing-strategy-demystified/%C2%A0for",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2018/internet-marketing/law-firm-marketing-in-house-vs-agency",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2018/internet-marketing/summer-2018-changes-coming-to-google-adwords",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2018/law-firm-internet-marketing/law-firm-internet-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2018/law-firm-internet-marketing/law-firm-marketing-in-house-vs-agency",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2018/law-firm-internet-marketing/rebranding-for-your-law-firm",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2018/law-firm-internet-marketing/summer-2018-changes-coming-to-google-adwords",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/2018/seo/top-family-law-marketing-strategies-for-2018/embed",
    "destination": "/family-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/law-firm-internet-marketing/law-firm-internet-marketing-strategies/feed",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/2019/seo/law-firm-seo-5-things-you-can-do-to-build-traffic-to-your-website",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/2019/website-development/how-to-choose-a-law-firm-website-designer-in-2019",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2019/website-development/scales-of-justice-gavel-done-avoiding-a-cliche-law-firm-logo",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/2023/content-marketing-for-law-firms-the-ultimate-guide",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/2023/internet-marketing/legal-marketing-kpis-to-track-for-law-firms",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/category/seo",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/contact-us/schedule",
    "destination": "/contact/",
    "permanent": true
  },
  {
    "source": "/estate-planning-attorney-websites",
    "destination": "/estate-planning-lawyer-marketing/",
    "permanent": true
  },
  {
    "source": "/how-important-seo-local-service-companies",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/law-firm-marketing/law-firm-seo",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/lead-generation-for-lawyers",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/local-seo-benefit-law-firm",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/portfolio-jp-classic/law-office-of-crystal-huff",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/pricing/boost",
    "destination": "/services/pricing/",
    "permanent": true
  },
  {
    "source": "/seo-for-lawyers/content-marketing",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/services/increase-attorney-website-traffic",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/websites-for-criminal-lawyers",
    "destination": "/criminal-defense-lawyer-marketing/",
    "permanent": true
  },
  {
    "source": "/attorney-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/best-form-advertising-lawyer",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/category/google-ads/feed",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/divorce-lawyer-seo",
    "destination": "/family-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/future-trends-in-seo-for-legal-marketing",
    "destination": "/generative-engine-optimization-legal-marketing/",
    "permanent": true
  },
  {
    "source": "/google-screened-for-lawyers",
    "destination": "/google-ads-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/how-much-law-firm-seo-cost",
    "destination": "/law-firm-seo-cost/",
    "permanent": true
  },
  {
    "source": "/how-much-pay-someone-seo",
    "destination": "/law-firm-seo-cost/",
    "permanent": true
  },
  {
    "source": "/is-it-worth-hiring-seo-company",
    "destination": "/law-firm-seo/",
    "permanent": true
  },
  {
    "source": "/landing-page-design-for-lawyers",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/law-firm-marketing-plan-template",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/law-firm-microsites",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/lawyer-marketing",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  },
  {
    "source": "/marketing-for-immigration-lawyers",
    "destination": "/immigration-lawyer-marketing/",
    "permanent": true
  },
  {
    "source": "/our-team",
    "destination": "/about-us/",
    "permanent": true
  },
  {
    "source": "/practice-area-guides",
    "destination": "/practice-areas/",
    "permanent": true
  },
  {
    "source": "/practice-area-power-pages",
    "destination": "/law-firm-content-writing/",
    "permanent": true
  },
  {
    "source": "/ranking-factors-local-seo-lawyers",
    "destination": "/local-seo-for-law-firms/",
    "permanent": true
  },
  {
    "source": "/feature-client-reviews-on-your-law-firms-website",
    "destination": "/law-firm-websites/",
    "permanent": true
  },
  {
    "source": "/prove-law-firm-marketing-roi",
    "destination": "/small-law-firm-marketing/",
    "permanent": true
  }
];
