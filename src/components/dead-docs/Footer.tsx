import { Link } from "@tanstack/react-router";
import { ArrowDiagonalIcon } from "@/components/dead-docs/icons";

const footerLinks = {
  Services: [
    { label: "Document Resurrection", href: "/#services" },
    { label: "Portal Development", href: "/#services" },
    { label: "Form Digitization", href: "/#services" },
    { label: "Data Dashboards", href: "/#services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/cases" },
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "mailto:hello@deaddocs.com", external: true },
  ],
  Social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/dead-docs/", external: true },
    { label: "X/Twitter", href: "https://x.com/deaddocs", external: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

function FooterLinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: ReadonlyArray<{ label: string; href: string | null; external?: boolean }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#95ff00]/60 mb-4">
        {heading}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map((link) => {
          if (link.href === null) {
            return (
              <button
                key={link.label}
                type="button"
                className="text-sm text-white/50 hover:text-[#95ff00] transition-colors text-left inline-flex items-center gap-1"
              >
                {link.label}
              </button>
            );
          }

          const isExternal = link.external || link.href.startsWith("http") || link.href.startsWith("mailto:");

          if (isExternal) {
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-[#95ff00] transition-colors inline-flex items-center gap-1"
              >
                {link.label}
                <ArrowDiagonalIcon className="h-3 w-3 text-white/30" />
              </a>
            );
          }

          return (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm text-white/50 hover:text-[#95ff00] transition-colors inline-flex items-center gap-1"
            >
              {link.label}
              <ArrowDiagonalIcon className="h-3 w-3 text-white/30" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#15171a" }} className="text-white">
      <div className="max-w-[1200px] mx-auto py-16 px-6">
        {/* Top row */}
        <div className="flex gap-16 flex-col lg:flex-row">
          {/* Left column */}
          <div className="max-w-[320px]">
            <span className="font-display text-xl text-white uppercase tracking-wider">DEAD DOCS</span>
            <p className="mt-4 text-sm text-white/40">
              Dead Docs is a consulting service that resurrects buried documents into structured, actionable data — and delivers a custom portal so the problem never comes back.
            </p>
            <p className="mt-4 text-sm text-white/20">
              Dead Docs, Inc. &copy; 2026
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-row gap-12 flex-wrap">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <FooterLinkColumn
                key={heading}
                heading={heading}
                links={links}
              />
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
