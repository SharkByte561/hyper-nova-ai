import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@/components/dead-docs/icons";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background video — full bleed */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-right max-md:object-[68%_35%]"
        >
          <source src="/dead-docs/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Desktop: left-side dark gradient for text legibility */}
        <div
          className="absolute inset-0 max-md:hidden"
          style={{
            background:
              "linear-gradient(90deg, #0a0b0d 0%, rgba(10,11,13,0.92) 25%, rgba(10,11,13,0.6) 50%, rgba(10,11,13,0.15) 75%, rgba(10,11,13,0) 100%)",
          }}
        />
        {/* Mobile: top-down scrim so text reads but video stays visible */}
        <div
          className="absolute inset-0 hidden max-md:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,11,13,0.5) 0%, rgba(10,11,13,0.15) 35%, rgba(10,11,13,0) 60%, rgba(10,11,13,0.55) 100%)",
          }}
        />
        {/* Soft vignette at bottom so hero blends into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 max-md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,11,13,0) 0%, #0a0b0d 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto pt-[160px] pb-[140px] px-6 min-h-[640px] flex flex-col justify-center max-md:pt-[80px] max-md:pb-[100px] max-md:min-h-[560px]">
        <div className="max-w-[560px]">
          <h1
            className="font-display text-[80px] leading-[82px] tracking-[-0.8px] text-white
              max-md:text-[44px] max-md:leading-[48px]"
          >
            YOUR DATA IS{" "}
            <span className="text-[#95ff00] text-glow-lime">TRAPPED.</span>
            <br />
            WE SET IT FREE.
          </h1>

          <p
            className="font-sans text-[18px] leading-[28px] text-white/70 mt-6 max-w-[460px]
              max-md:text-base max-md:leading-[26px]"
          >
            We digitize paper, unlock file shares, and turn buried information
            into dashboards and custom digital solutions.
          </p>

          <div className="mt-8 max-md:w-full">
            <Link
              to="/dead-docs/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#95ff00] text-[#15171a] border border-[#78d600] rounded-full text-[15px] font-medium h-[44px] px-5
                max-md:w-full"
            >
              Book a demo
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
