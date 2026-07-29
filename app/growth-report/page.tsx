import type { Metadata } from "next";
import { Suspense } from "react";
import SchemaOrg from "@/components/SchemaOrg";
import MarketGapForm from "@/components/MarketGapForm";

export const metadata: Metadata = {
  title: "Free Market Gap Report for Law Firms | JurisPage",
  description:
    "See exactly where your firm is losing cases in your market. Get an instant market gap snapshot for your practice area and city. Free. No obligation.",
  alternates: { canonical: "https://jurispage.com/growth-report/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Market Gap Report for Law Firms",
  url: "https://jurispage.com/growth-report/",
  description:
    "Get a free market gap report for your law firm. We analyze search demand, competitors, and visibility gaps in your market.",
  publisher: {
    "@type": "Organization",
    name: "JurisPage",
    url: "https://jurispage.com",
  },
};

const reportIncludes = [
  {
    title: "Your total addressable market",
    body: "How many people search for a lawyer like you every month, in your city.",
  },
  {
    title: "Who's winning those searches today",
    body: "The firms taking the cases you want, with their ratings, reviews, and positions.",
  },
  {
    title: "Your biggest gaps",
    body: "The specific places you're invisible while competitors collect the calls.",
  },
];

export default function GrowthReportPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Hero */}
      <section className="bg-white pt-16 pb-8 px-6 border-b border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="inline-block text-xs font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 text-white"
            style={{ background: "#EE6C13" }}
          >
            Free. Personalized. No Obligation.
          </span>
          <h1 className="font-heading font-extrabold text-gray-900 text-4xl md:text-5xl leading-tight mb-5">
            See the Gap Between Your Firm and Your Market
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            One report tells you everything: how many potential clients are
            searching in your market, who&apos;s winning them today, and where
            your firm is missing. Get an instant snapshot in about 60 seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {[
              "Instant snapshot in 60 seconds",
              "Real search and competitor data",
              "113+ law firms served",
            ].map((label) => (
              <span key={label} className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="#EE6C13"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center text-gray-500">Loading form...</div>}>
            <MarketGapForm />
          </Suspense>
        </div>
      </section>

      {/* What's in the report */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-gray-900 text-3xl text-center mb-10">
            What Your Market Gap Report Shows
          </h2>
          <div className="space-y-6">
            {reportIncludes.map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-5 bg-gray-50 rounded-xl border border-gray-100 p-6"
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: "#EE6C13" }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-8">
            Your instant snapshot arrives in about 60 seconds. Our team then
            builds the full analysis and a real person walks you through what
            we found.
          </p>
        </div>
      </section>
    </>
  );
}
