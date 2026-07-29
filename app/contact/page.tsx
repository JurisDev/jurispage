import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Contact JurisPage | Ready for a Change?",
  description: "Ready for a change? Let's explore your options. Tell us about your firm and book a free, no-obligation consultation with JurisPage.",
  alternates: { canonical: "https://jurispage.com/contact/" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://jurispage.com/contact/",
  name: "Contact JurisPage",
  url: "https://jurispage.com/contact/",
  description: "Book a free, no-obligation consultation with JurisPage.",
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={contactSchema} />
      <section className="bg-white py-16 px-6 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading font-extrabold text-gray-900 text-4xl mb-4">Ready for a Change? Let&apos;s Explore Your Options.</h1>
          <p className="text-gray-600 text-lg leading-relaxed">Tell us about your firm and what you&apos;re trying to accomplish. We&apos;ll set up a conversation about where you are, where you want to be, and whether we&apos;re the right team to get you there.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-extrabold text-gray-900 text-2xl mb-6">What Happens Next</h2>
            <div className="space-y-5">
              {[
                { step: "1", title: "You submit the form", body: "Takes 2 minutes. Tell us about your firm and your goals." },
                { step: "2", title: "We reach out", body: "A member of our team contacts you to set up a time to talk." },
                { step: "3", title: "Free 30-minute call", body: "We talk through your situation, your options, and whether JurisPage is the right fit." },
                { step: "4", title: "You decide", body: "No pressure. If it's a fit, great. If not, no hard feelings." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm text-gray-900" style={{ background: "linear-gradient(135deg, #EE6C13, #982A0B)" }}>
                    {item.step}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-gray-900 text-base">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-heading font-bold text-gray-900 mb-4">Prefer to call?</h3>
              <a href="tel:+18555936935" className="font-heading font-extrabold text-2xl no-underline" style={{ color: "#EE6C13" }}>
                (855) 593-6935
              </a>
              <p className="text-gray-500 text-sm mt-2">Available Mon–Fri, 9am–5pm MT</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-2">Tell Us About Your Firm</h2>
            <p className="text-gray-500 text-sm mb-6">We&apos;ll respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
