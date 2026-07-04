import { useState } from "react";
import { CheckmarkIcon } from "@/components/dead-docs/icons";

const tabs = [
  {
    title: "Resurrect",
    description:
      "We connect to your file shares, SharePoint sites, cloud storage, and legacy systems \u2014 then scan and catalog every buried document. PDFs, scans, spreadsheets, handwritten notes. If it\u2019s sitting there forgotten, we find it.",
    video: "/dead-docs/videos/single-page-digitized.mp4",
  },
  {
    title: "Extract & Structure",
    description:
      "Our team runs AI-powered extraction across your entire archive \u2014 pulling out tables, key fields, dates, figures, and narrative text. Everything gets organized into clean, structured data ready for your new system.",
    video: "/dead-docs/videos/single-page-digitized.mp4",
  },
  {
    title: "Build Your Portal",
    description:
      "We design and deliver a custom web portal with digitized versions of your most critical forms \u2014 so your team can enter new data directly into a structured system instead of filing more paper into the void.",
    video: "/dead-docs/videos/single-page-digitized.mp4",
  },
  {
    title: "Manage & Monitor",
    description:
      "Your portal includes a management dashboard with real-time visibility across all your data. Filter, search, export, and generate reports \u2014 a standalone solution that ensures the dead docs problem never comes back.",
    video: "/dead-docs/videos/single-page-digitized.mp4",
  },
];

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max-w-[1200px] mx-auto px-6 border-t border-[#2a2d32] pt-12">
      {/* Section Header */}
      <div className="flex flex-col items-start">
        <span className="flex items-center gap-1.5 font-sans text-[15px] font-medium text-[#95ff00]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#95ff00]" />
          What We Deliver
        </span>
        <h2
          className="font-display text-[64px] leading-[80px] text-white uppercase mt-4
            max-md:text-[36px] max-md:leading-[44px]"
        >
          AN END-TO-END RESURRECTION.
        </h2>
        <p className="font-sans text-lg text-white/60 mt-3">
          We handle everything — from discovery to a fully deployed portal. You get the solution, not more work.
        </p>
      </div>

      {/* Split Layout */}
      <div
        className="grid grid-cols-2 gap-12 mt-12
          max-md:grid-cols-1"
      >
        {/* Left: Tab Buttons */}
        <div className="flex flex-col">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`w-full text-left p-4 border-b border-dashed transition-all duration-300 ${
                activeTab === index
                  ? "border-[#95ff00]/30"
                  : "border-[#2a2d32]"
              }`}
            >
              <div className="flex items-center gap-2">
                <CheckmarkIcon
                  className={
                    activeTab === index
                      ? "text-[#95ff00]"
                      : "text-white/40"
                  }
                />
                <span className={`font-sans text-[16px] font-medium ${activeTab === index ? "text-white" : "text-white/40"}`}>
                  {tab.title}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeTab === index
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-sans text-[14px] text-white/60 leading-relaxed">
                  {tab.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Right: Video */}
        <div className="relative flex items-start">
          {tabs.map((tab, index) => (
            <video
              key={tab.title}
              autoPlay
              loop
              muted
              playsInline
              src={tab.video}
              className={`w-full rounded-xl ring-1 ring-[#95ff00]/10 absolute top-0 left-0 transition-opacity duration-500 ${
                activeTab === index
                  ? "opacity-100 relative"
                  : "opacity-0 pointer-events-none"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
