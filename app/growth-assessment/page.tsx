import type { Metadata } from "next";
import { Suspense } from "react";
import SchemaOrg from "@/components/SchemaOrg";
import MarketGapForm from "@/components/MarketGapForm";

export const metadata: Metadata = {
  title: "Free Market Gap Report for Law Firms | JurisPage",
  description:
    "Find out where your firm is losing cases in your market. Get an instant market gap snapshot for your practice area and city. Free. No obligation.",
  alternates: { canonical: "https://jurispage.com/growth-assessment/" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://jurispage.com/growth-assessment/",
  name: "Free Market Gap Report for Law Firms",
  url: "https://jurispage.com/growth-assessment/",
  description:
    "Get a free market gap report showing search demand, competitors, and visibility gaps in your market.",
};

export default function GrowthAssessmentPage() {
  return (
    <>
      <SchemaOrg schema={pageSchema} />

      <section className="bg-white py-16 px-6 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <span
            className="inline-block text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 text-white"
            style={{ background: "#EE6C13" }}
          >
            Free Market Gap Report
          </span>
          <h1 className="font-heading font-extrabold text-gray-900 text-4xl mb-4">
            Before You Change Your Marketing, See Your Market
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every good growth decision starts with the same question: where are
            the cases going right now? Our free Market Gap report shows the
            search demand in your market, the firms capturing it, and the gaps
            you can close. Instant snapshot in about 60 seconds.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center text-gray-500">Loading form...</div>}>
            <MarketGapForm />
          </Suspense>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-gray-900 text-2xl mb-6 text-center">
            How It Works
          </h2>
          <div className="space-y-5 max-w-xl mx-auto">
            {[
              { step: "1", title: "Tell us about your firm", body: "Practice area, city, and a few quick details. Takes about a minute." },
              { step: "2", title: "Get your instant snapshot", body: "Search demand, map pack competitors, and your visibility, pulled from live data in about 60 seconds." },
              { step: "3", title: "We build the full analysis", body: "Our team digs into the detailed competitor and keyword data behind your snapshot, then a real person walks you through what we found." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm text-white"
                  style={{ background: "#EE6C13" }}
                >
                  {item.step}
                </div>
                <div>
                  <div className="font-heading font-semibold text-gray-900 text-base">{item.title}</div>
                  <div className="text-gray-600 text-sm mt-1">{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200 text-center max-w-xl mx-auto">
            <h3 className="font-heading font-bold text-gray-900 mb-3">Prefer to call?</h3>
            <a href="tel:+18555936935" className="font-heading font-extrabold text-2xl no-underline" style={{ color: "#EE6C13" }}>
              (855) 593-6935
            </a>
            <p className="text-gray-500 text-sm mt-2">Available Mon–Fri, 9am–5pm MT</p>
          </div>
        </div>
      </section>
    </>
  );
}
