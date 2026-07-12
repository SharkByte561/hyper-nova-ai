import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@/components/dead-docs/icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      {/* Announcement Banner */}
      <div className="w-full bg-[#95ff00]" style={{ height: 45 }}>
        <Link
          to="/dead-docs/contact"
          className="flex h-full items-center justify-center px-4 py-3 text-sm font-medium text-[#15171a] hover:underline"
        >
          Now booking Q3 engagements — limited availability for enterprise assessments
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav
        className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between bg-[#15171a] px-6"
      >
        {/* Logo — Hypernova AI (back to main site) / Dead Docs */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 opacity-80 transition hover:opacity-100"
            title="Back to Hypernova AI"
          >
            <img
              src="/hypernova-icon.png"
              alt=""
              aria-hidden="true"
              className="h-8 w-8 object-contain"
            />
            <span className="font-display hidden text-sm text-white/70 sm:inline">
              HYPERNOVA AI
            </span>
          </Link>
          <span aria-hidden="true" className="text-white/25">
            /
          </span>
          <Link to="/dead-docs" className="font-display text-xl text-white">
            DEAD DOCS
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/dead-docs/contact"
            className="inline-flex items-center gap-1.5 rounded-none bg-[#95ff00] text-[#15171a] px-5 py-2.5 font-sans text-sm font-medium transition-colors hover:bg-[#78d600]"
          >
            Book a demo
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
