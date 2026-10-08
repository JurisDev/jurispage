import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import { caseStudies } from "@/data/caseStudies";
import { ogBase } from "@/lib/og";

export const metadata: Metadata = {
  title: "Scorpion Alternative for Law Firms (2026)",
  description: "Compare JurisPage and Scorpion on pricing transparency, ownership, scope, launch model, and fit before choosing a legal marketing agency.",
  alternates: { canonical: "https://jurispage.com/scorpion-legal-marketing-alternative/" },
  openGraph: { ...ogBase, url: "https://jurispage.com/scorpion-legal-marketing-alternative/" },
};

const faqs = [
  { question: "What's the main difference between JurisPage and Scorpion?", answer: "The biggest differences are agency scale, delivery model, pricing transparency, and fit. JurisPage publishes pricing, works exclusively in legal marketing, and packages the website and growth foundation into a defined 24-month engagement with no upfront setup fee. Scorpion is a much larger, multi-industry company with a legal marketing division and custom proposals." },
  { question: "Is JurisPage cheaper than Scorpion?", answer: "JurisPage starts at $2,500/month over a 24-month engagement with no upfront setup fee. Scorpion does not publish standard legal-marketing pricing, so an accurate comparison requires a written proposal with the same scope, media spend, ownership terms, launch work, and contract period." },
  { question: "Can I switch from Scorpion to JurisPage without losing my website?", answer: "Scorpion currently states that clients own their domain and content and that it will package site files when a client leaves. Because the underlying platform may differ, your next provider may still need to rebuild the site. Before switching, request a complete export, analytics access, domain and DNS access, ad-account access, call-tracking records, content files, and redirect map." },
  { question: "How long is the JurisPage engagement?", answer: "JurisPage is a 24-month engagement with no upfront setup fee. We front-load the work (brand design, StoryBrand website, GBP, Yelp, Apple Maps, citations, tracking) so your full marketing foundation is live in 45 days. We do not front-load the billing. Costs are spread evenly across the 24 months so small and startup firms can afford the work without a large day-one check." },
];

export default function ScorpionAlternativePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <SchemaOrg schema={schema} />

      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900 no-underline">Home</Link> / <span className="text-gray-700">Scorpion Legal Marketing Alternative</span>
          </nav>
          <h1 className="font-heading font-extrabold text-gray-900 text-4xl mb-4">Looking for a Scorpion Legal Marketing Alternative?</h1>
          <p className="text-gray-600 text-lg">A current, practical comparison of fit, ownership, scope, and cost.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base leading-relaxed mb-8">Scorpion is a large marketing and technology company with a substantial legal division. JurisPage is built specifically for small and growing law firms that want a defined launch plan, published pricing, and a legal-only team. Neither model is automatically right for every firm; the useful question is which operating model matches your budget, stage, and need for control.</p>

          <h2 className="font-heading font-extrabold text-gray-900 text-2xl mb-6">The Core Differences</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: "#1a1a1a" }}>
                  <th className="p-4 text-left text-white font-semibold"> </th>
                  <th className="p-4 text-center font-bold" style={{ color: "#EE6C13" }}>JurisPage</th>
                  <th className="p-4 text-center text-gray-300 font-semibold">Scorpion</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pricing transparency", "Published online", "Requires sales call"],
                  ["Asset ownership", "You own the site, domain, and content", "States clients own domain/content and receive site files when leaving"],
                  ["Upfront setup fee", "$0 (costs spread over 24 months)", "Confirm in your written proposal"],
                  ["Full setup timeline", "45 days", "Confirm in your written proposal"],
                  ["Company focus", "100% legal", "Multi-industry company with a legal division"],
                  ["Starting price", "$2,500/month (no upfront fee)", "Custom quote; standard pricing not published"],
                  ["Team structure", "Dedicated point of contact from day one", "Confirm named team and escalation path"],
                ].map(([feature, jp, sc], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff" }}>
                    <td className="p-4 border-b border-gray-100 font-medium text-gray-800">{feature}</td>
                    <td className="p-4 border-b border-gray-100 text-center font-semibold text-green-700">{jp}</td>
                    <td className="p-4 border-b border-gray-100 text-center text-gray-500">{sc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-heading font-extrabold text-gray-900 text-2xl mb-4">When Scorpion Makes Sense</h2>
          <p className="text-gray-700 leading-relaxed mb-8">Scorpion may make sense if you want a large provider with proprietary technology, a broad service menu, and a substantial legal-industry team. Ask for a written scope that separates agency fees from media spend, names the people responsible for your account, explains data access, and documents what is delivered if the relationship ends.</p>

          <h2 className="font-heading font-extrabold text-gray-900 text-2xl mb-4">When JurisPage Makes More Sense</h2>
          <ul className="space-y-3 mb-8">
            {[
              "You want to own your website and all assets, permanently",
              "You want to avoid a huge upfront setup fee and keep your cash for the first months of practice",
              "You want to see pricing before getting on a sales call",
              "Your budget is $2,500 to $4,000/month and you want specialized legal SEO, not a generalist platform",
              "You are a small or startup firm with little to no online presence and need the full marketing foundation live in 45 days",
              "You've been at Scorpion and felt like a small account inside a large agency",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start text-gray-700"><span style={{ color: "#EE6C13" }} className="flex-shrink-0 mt-0.5">✓</span><span>{item}</span></li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 leading-relaxed">
            Comparison updated October 2026. Scorpion details are based on its publicly available legal-marketing materials, including its <a href="https://www.scorpion.co/law-firms/insights/blog/verticals/law-firms/why-the-scorpion-and-clio-partnership-matters-fo/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">ownership statement</a>; confirm all pricing, timing, deliverables, and exit terms in your proposal.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-orange-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-2xl mb-4">A Switching Plan That Protects Your Existing Leads</h2>
          <p className="text-gray-700 mb-4">Before changing agencies, document what already works. A new design is not a reason to discard pages that earn inquiries or links.</p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Export Search Console landing pages, Analytics conversions, and your CRM&apos;s qualified leads and signed clients.</li>
            <li>Confirm ownership and administrator access for your domain, website content, Google Business Profile, advertising, analytics, and call tracking.</li>
            <li>Keep valuable URLs where possible. Map every changed URL to its closest relevant replacement with a permanent redirect.</li>
            <li>Test forms, phone numbers, tracking, CRM delivery, and mobile navigation before launch. Compare qualified leads after launch—not just rankings.</li>
          </ol>
          <p className="text-gray-700 mt-6">For the budget conversation, compare <Link href="/law-firm-seo-cost/" className="underline">SEO costs and scope</Link> with our <Link href="/services/pricing/" className="underline">published pricing and engagement terms</Link>.</p>
          <p className="text-sm text-gray-600 mt-4">The examples below show existing client work, not verified Scorpion-to-JurisPage migrations. Individual results are not a forecast for your firm.</p>
        </div>
      </section>
      <CaseStudyPreview caseStudies={caseStudies.filter((study) => study.slug === "the-sands-law-group")} heading="See How SEO and Paid Search Work Together" />
      <FAQAccordion faqs={faqs} heading="Common Questions About Switching" />

      <CTASection
        heading="See Where You Stand"
        subtext="Get an initial market-gap snapshot, then talk through your current results, ownership questions, and the scope of a potential move."
        primaryLabel="See Where You Stand"
        primaryHref="/see-my-market-gap/"
        secondaryLabel="See Pricing"
        secondaryHref="/services/pricing/"
      />
    </>
  );
}
