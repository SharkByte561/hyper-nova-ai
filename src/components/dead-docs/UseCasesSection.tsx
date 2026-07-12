import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HoverArrowIcon } from "@/components/dead-docs/icons";

const tabs: readonly { id: TabId; label: string }[] = [
  { id: "finance", label: "Compliance & Audit" },
  { id: "healthcare", label: "Healthcare" },
  { id: "insurance", label: "Legal & Contracts" },
  { id: "legal", label: "Government & Public Sector" },
];

type TabId = "finance" | "healthcare" | "insurance" | "legal";

interface UseCaseData {
  heading: string;
  description: string;
  quote: string;
  attribution: string;
  illustration: string;
}

const useCases: Record<TabId, UseCaseData> = {
  finance: {
    heading: "Compliance & Audit",
    description:
      "Decades of audit trails, financial reports, and regulatory filings collecting dust in shared drives. Dead Docs resurfaces them into searchable, structured compliance dashboards \u2014 ready for auditors in seconds, not weeks.",
    quote:
      "\u201CWe had 15 years of SOX documentation buried across three file servers. Dead Docs found and structured it all in 48 hours.\u201D",
    attribution: "VP of Internal Audit, Fortune 500 Financial Services",
    illustration: "/dead-docs/images/compliance.png",
  },
  healthcare: {
    heading: "Healthcare",
    description:
      "Patient intake forms, faxed referrals, handwritten clinical notes, insurance EOBs \u2014 all trapped in filing cabinets and legacy systems. Dead Docs digitizes, structures, and surfaces them as queryable patient intelligence.",
    quote:
      "\u201CWe went from 72-hour chart retrieval to instant search across 10 years of patient records.\u201D",
    attribution: "CIO, Regional Health System",
    illustration: "/dead-docs/images/healthIns.png",
  },
  insurance: {
    heading: "Legal & Contracts",
    description:
      "Thousands of contracts, NDAs, lease agreements, and court filings sitting in boxes and SharePoint folders. Dead Docs extracts every clause, date, and obligation into structured contract intelligence \u2014 so nothing falls through the cracks.",
    quote:
      "\u201CWe discovered $2.3M in missed renewal deadlines within the first week of using Dead Docs.\u201D",
    attribution: "General Counsel, Mid-Market SaaS Company",
    illustration: "/dead-docs/images/legal.png",
  },
  legal: {
    heading: "Government & Public Sector",
    description:
      "FOIA requests, permit applications, legacy citizen records, decades of municipal paperwork. Dead Docs brings transparency to government archives \u2014 turning paper mountains into structured, searchable public data.",
    quote:
      "\u201CWe digitized 30 years of building permits and reduced FOIA response time from weeks to hours.\u201D",
    attribution: "Director of Digital Services, County Government",
    illustration: "/dead-docs/images/govt.png",
  },
};

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState<TabId>("finance");
  const data = useCases[activeTab];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Dotted background */}
      <img
        src="/dead-docs/backgrounds/dotted-background.svg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-10 invert"
        alt=""
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="flex items-center gap-2 font-sans text-[15px] font-medium text-[#95ff00] mb-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="6"
                height="6"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="9"
                y="1"
                width="6"
                height="6"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="1"
                y="9"
                width="6"
                height="6"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="9"
                y="9"
                width="6"
                height="6"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Use cases
          </span>

          <h2 className="font-display text-[64px] leading-[80px] tracking-[-0.5px] text-white uppercase max-w-[800px] max-md:text-[36px] max-md:leading-[44px]">
            DEAD DATA IN EVERY INDUSTRY. WE FIX THAT.
          </h2>

          <p className="font-sans text-lg text-white/60 mt-4 max-w-[640px]">
            From compliance archives to patient records, every industry has a graveyard of untouched documents.
          </p>
        </div>

        {/* Tab bar */}
        <div className="border-b border-[#2a2d32] mb-12 overflow-x-auto">
          <div className="flex items-center gap-1 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 font-sans text-[14px] font-medium px-4 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "text-white border-[#95ff00]"
                    : "text-white/40 border-transparent hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: text content */}
          <div className="flex flex-col">
            <span className="font-sans text-[13px] font-medium text-[#95ff00] uppercase tracking-wider mb-3">
              Use cases
            </span>

            <h5 className="font-display text-[32px] leading-[40px] text-white uppercase mb-4">
              {data.heading}
            </h5>

            <p className="font-sans text-base leading-[26px] text-white/60 mb-6">
              {data.description}
            </p>

            <Link
              to="/dead-docs/contact"
              className="inline-flex items-center gap-2 font-sans text-[15px] font-medium text-[#95ff00] hover:underline transition-colors mb-10 group"
            >
              Get started
              <HoverArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Quote block */}
            <div className="border-l-2 border-[#9542f4] pl-5">
              <p className="font-sans text-[16px] leading-[26px] text-white/40 italic mb-3">
                {data.quote}
              </p>
              <p className="font-sans text-[15px] text-white/40">
                {data.attribution}
              </p>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative flex items-center justify-center">
            <img
              src="/dead-docs/illustrations/use-cases-background.svg"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-30"
              alt=""
            />
            <img
              src={data.illustration}
              className="relative w-full max-w-[520px]"
              alt={`${data.heading} use case illustration`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
