import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@/components/dead-docs/icons";

export default function CTASection() {
  return (
    <section
      className="relative rounded-none py-32 px-6 overflow-hidden"
      style={{
        backgroundColor: "#95ff00",
        backgroundImage: "url('/backgrounds/cta-grid-pattern.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Pattern overlay */}
      <img
        src="/dead-docs/backgrounds/cta-pattern.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 invert pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="font-display text-[80px] leading-[90px] text-[#15171a] text-center uppercase max-md:text-[36px] max-md:leading-[44px]">
          RESURRECT YOUR DATA.
        </h2>
        <p className="font-sans text-lg text-[#15171a]/70 text-center max-w-[600px] mt-4">
          Let&apos;s talk about what&apos;s buried in your file shares and how we can bring it back to life.
        </p>

        <div className="flex flex-row items-center justify-center gap-3 mt-8 max-md:flex-col max-md:w-full">
          <Link
            to="/dead-docs/contact"
            className="flex items-center gap-2.5 bg-[#15171a] text-[#95ff00] border border-[#15171a] rounded-none text-[17px] font-medium h-[56px] px-8 py-3 max-md:w-full max-md:justify-center"
          >
            Book a demo
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
