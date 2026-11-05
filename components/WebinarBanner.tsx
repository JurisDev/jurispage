const registrationUrl =
  "https://partner.jurisdigital.com/webinar-law-firm-content-ai-citations?utm_source=jurispage&utm_medium=referral&utm_campaign=law_firm_content_ai_citations_2026_11_17&utm_content=top_banner";

export default function WebinarBanner() {
  return (
    <aside aria-label="Upcoming webinar" data-site-banner className="bg-[#982A0B] text-white">
      <a
        href={registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-webinar-banner="law_firm_content_ai_citations_2026_11_17"
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-3 text-center text-sm text-white no-underline transition-colors hover:bg-black/10 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white sm:flex-row sm:flex-wrap sm:gap-x-5 lg:flex-nowrap"
      >
        <span className="shrink-0 font-semibold">Live webinar · Nov 17, 3 PM ET</span>
        <span>How to Create Law Firm Website Content That Gets Cited by AI Tools</span>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 font-bold text-[#982A0B]">
          Register now <span aria-hidden="true">→</span>
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </aside>
  );
}
