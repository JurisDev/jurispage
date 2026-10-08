"use client";
import { useState } from "react";

type PracticeArea = "Personal Injury" | "Criminal Defense" | "Family Law" | "DUI" | "Immigration" | "Other";

const benchmarks: Record<PracticeArea, { cpl: number; closeRate: number }> = {
  "Personal Injury":   { cpl: 250, closeRate: 0.10 },
  "Criminal Defense":  { cpl: 175, closeRate: 0.20 },
  "Family Law":        { cpl: 150, closeRate: 0.18 },
  "DUI":               { cpl: 140, closeRate: 0.22 },
  "Immigration":       { cpl: 130, closeRate: 0.25 },
  "Other":             { cpl: 180, closeRate: 0.15 },
};

export default function PpcRoiCalculator() {
  const [practiceArea, setPracticeArea] = useState<PracticeArea>("Personal Injury");
  const [caseValue, setCaseValue] = useState(15000);
  const [budget, setBudget] = useState(5000);

  const { cpl, closeRate } = benchmarks[practiceArea];
  const estimatedLeads = Math.floor(budget / cpl);
  const estimatedCases = Math.floor(estimatedLeads * closeRate);
  const projectedRevenue = estimatedCases * caseValue;
  const roas = budget > 0 ? (projectedRevenue / budget).toFixed(1) : "0.0";

  return (
    <div className="max-w-2xl mx-auto">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label htmlFor="ppc-practice" className="block text-sm font-heading font-semibold text-gray-300 mb-2">
            Practice Area
          </label>
          <select
            id="ppc-practice"
            value={practiceArea}
            onChange={(e) => setPracticeArea(e.target.value as PracticeArea)}
            className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-white border-0 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": "#EE6C13" } as React.CSSProperties}
          >
            {(Object.keys(benchmarks) as PracticeArea[]).map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="ppc-fees" className="block text-sm font-heading font-semibold text-gray-300 mb-2">
            Collected Fees per Client ($)
          </label>
          <input
            id="ppc-fees"
            type="number"
            min={1000}
            step={1000}
            value={caseValue}
            onChange={(e) => setCaseValue(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-white border-0 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": "#EE6C13" } as React.CSSProperties}
          />
        </div>

        <div>
          <label htmlFor="ppc-budget" className="block text-sm font-heading font-semibold text-gray-300 mb-2">
            Monthly Media Budget ($)
          </label>
          <input
            id="ppc-budget"
            type="number"
            min={500}
            step={500}
            value={budget}
            onChange={(e) => setBudget(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-white border-0 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": "#EE6C13" } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Est. Monthly Leads", value: estimatedLeads.toLocaleString() },
          { label: "Est. Cases Signed", value: estimatedCases.toLocaleString() },
          { label: "Projected Revenue", value: `$${projectedRevenue.toLocaleString()}` },
          { label: "Revenue / Ad Spend", value: `${roas}×` },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="rounded-2xl p-5 text-center"
            style={{ background: "#2a1a0a", border: "1px solid #EE6C1340" }}
          >
            <div
              className="font-heading font-extrabold text-2xl md:text-3xl mb-1"
              style={{ color: "#EE6C13" }}
            >
              {value}
            </div>
            <div className="text-gray-400 text-xs leading-snug">{label}</div>
          </div>
        ))}
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Illustrative assumptions: ${cpl} per inquiry and {(closeRate * 100).toFixed(0)}% of inquiries becoming clients. Leads = media budget ÷ cost per inquiry; clients = leads × close rate (both rounded down); revenue = clients × collected fees. These presets are scenarios, not verified industry averages or forecasts. Use legal fees, not settlement amounts. Management fees, operating costs, collection delays, and taxes are excluded; this is not profit ROI.
      </p>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#contact"
          className="inline-block font-heading font-bold text-sm px-8 py-4 rounded-[40px] text-white no-underline transition-colors"
          style={{ background: "#EE6C13" }}
          onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d45e0a"; }}
          onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#EE6C13"; }}
        >
          Talk to a PPC Specialist
        </a>
      </div>
    </div>
  );
}
