import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@/components/dead-docs/icons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What exactly does Dead Docs do?",
    answer:
      "We're a consulting service. We come in, connect to your file shares and legacy systems, extract and structure all the data trapped in your buried documents, and deliver a custom web portal — complete with digitized forms and management dashboards. You get a turnkey solution, not another tool to learn.",
  },
  {
    question: "How does an engagement work?",
    answer: (
      <>
        It starts with a demo call where we assess your document landscape. From there, we run a pilot on a subset of your archive to prove the value. Once approved, we execute the full resurrection — discovery, extraction, structuring — and deliver your custom portal.{" "}
        <a href="/dead-docs/contact" className="underline text-[#95ff00]">
          Book a demo
        </a>{" "}
        to get started.
      </>
    ),
  },
  {
    question: "What happens after the initial engagement?",
    answer:
      "You keep the portal. It's a standalone solution — your team uses digitized forms to enter new data directly into the system, and the management dashboard gives you real-time visibility. No more documents going back to the graveyard. We also offer ongoing support and enhancement packages.",
  },
  {
    question: "What kinds of documents can you handle?",
    answer:
      "Anything. PDFs, scanned paper, spreadsheets, Word docs, handwritten forms, faxes, images, legacy database exports — if it contains data your company needs, we can extract and structure it. We've worked with archives spanning decades.",
  },
  {
    question: "Is our data secure during the process?",
    answer:
      "Absolutely. We're SOC2 Type II certified and HIPAA compliant. For sensitive engagements, we can run our entire pipeline within your infrastructure — your documents never leave your environment. We sign NDAs and BAAs as standard practice.",
  },
];

export function FAQSection() {
  return (
    <section className="relative z-10 bg-[#15171a] py-20 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-10">
        {/* Left Column */}
        <div className="sticky top-40 self-start max-md:static">
          <h2
            className="font-display text-[64px] leading-[80px] text-white uppercase
              max-md:text-[36px] max-md:leading-[44px]"
          >
            QUESTIONS. ANSWERED.
          </h2>
          <Link
            to="/dead-docs/contact"
            className="inline-flex items-center gap-2.5 bg-[#95ff00] text-[#15171a] border border-[#78d600] rounded-none text-[17px] font-medium h-[56px] px-6 py-3 mt-8"
          >
            Book a demo
            <ArrowRightIcon />
          </Link>
        </div>

        {/* Right Column — Accordion */}
        <div>
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b border-[#2a2d32] hover:bg-[#1e2024] transition-colors">
                <AccordionTrigger className="py-5 text-[16px] font-medium text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-white/60 leading-relaxed">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
