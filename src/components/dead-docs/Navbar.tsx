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
        {/* Logo */}
        <Link to="/dead-docs" className="shrink-0 font-display text-white text-xl">
          DEAD DOCS
        </Link>

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
