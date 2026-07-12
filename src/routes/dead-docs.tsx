import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/dead-docs/Navbar";
import HeroSection from "@/components/dead-docs/HeroSection";
import StatsSection from "@/components/dead-docs/StatsSection";
import ProductSection from "@/components/dead-docs/ProductSection";
import UseCasesSection from "@/components/dead-docs/UseCasesSection";
import FAQSection from "@/components/dead-docs/FAQSection";
import CTASection from "@/components/dead-docs/CTASection";
import Footer from "@/components/dead-docs/Footer";

export const Route = createFileRoute("/dead-docs")({
  head: () => ({
    meta: [
      { title: "Dead Docs — AI Document Parsing & Extraction | Hypernova AI" },
      {
        name: "description",
        content:
          "Turn your dead documents into living data. We extract and structure everything trapped in your PDFs, scans, and legacy files — and deliver a custom portal. A Hypernova AI service.",
      },
      { property: "og:title", content: "Dead Docs — Turn Dead Documents into Living Data" },
      {
        property: "og:description",
        content:
          "AI-powered document resurrection: discovery, extraction, structuring, and a turnkey portal for your team.",
      },
    ],
  }),
  component: DeadDocsPage,
});

function DeadDocsPage() {
  return (
    <div className="min-h-screen bg-[#15171a] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ProductSection />
        <UseCasesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
