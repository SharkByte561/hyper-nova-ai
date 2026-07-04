import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Clock4,
  Search,
  Database,
  Clock,
  Compass,
  Banknote,
  GraduationCap,
  Bot,
  Clapperboard,
  Receipt,
  MessageSquare,
  Smartphone,
  Ear,
  Target,
  Wrench,
  Rocket,
  FileText,
  MapPinned,
  type LucideIcon,
} from "lucide-react";

// Hero background video, served as a static asset from /public so it loads
// in local dev and production alike.
const HERO_VIDEO = "/hyper_nova_ai.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hypernova AI — Ignite Your Business. Harness the Power." },
      {
        name: "description",
        content:
          "Hypernova AI brings a hypernova of efficiency to your data, workflows, and team. Start with a $199 AI Audit — honest advice, custom roadmap, and we build it with you.",
      },
      { property: "og:title", content: "Hypernova AI — Ignite Your Business. Harness the Power." },
      {
        property: "og:description",
        content:
          "AI automation for business & government. AI audits, implementation, training, and automation — smart technology, honest advice, real results.",
      },
    ],
  }),
  component: Landing,
});

const COMPANY = "HYPERNOVA AI";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <Audit />
      <Process />
      <Implementation />
      <Training />
      <WhyUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="w-full border-b border-border bg-[#0f1113] py-2 text-center">
      <p className="font-mono-eyebrow">
        Book your AI Audit — $199 flat fee · no jargon, no pressure
      </p>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src="/hypernova-icon.png" alt="" aria-hidden="true" className="h-[46px] w-[46px] object-contain" />
          <span className="font-heading text-xl tracking-wide">{COMPANY}</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {[
            ["Services", "#services"],
            ["AI Audit", "#audit"],
            ["Training", "#training"],
            ["Pricing", "#pricing"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {label}
            </a>
          ))}
          <Link
            to="/walkthroughs"
            className="text-sm font-bold text-primary transition hover:brightness-110"
          >
            Walkthroughs
          </Link>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:brightness-110"
        >
          Book an Audit <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Some browsers ignore the autoPlay attribute after client hydration, so
  // kick playback off explicitly once the file is ready (muted autoplay is
  // always permitted). This guarantees the hero shows a *running* video.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = () => v.play().catch(() => {});
    play();
    v.addEventListener("canplay", play, { once: true });
    return () => v.removeEventListener("canplay", play);
  }, []);

  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* Brand video banner — plays/loops at the top of the page.
          Capped at the source's native width (1280px) and centered so it never
          upscales/distorts on ultra-wide displays; gutters fall back to the page bg. */}
      <div className="relative mx-auto w-full max-w-[1280px]">
        <video
          ref={videoRef}
          className="block h-[42vh] min-h-[260px] w-full object-cover sm:h-[50vh] lg:h-[58vh]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Fade the bottom edge of the video into the page background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background"
        />
      </div>

      {/* Headline + copy, directly under the video */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pt-14">
        <p className="font-mono-eyebrow mb-6 inline-flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          AI Automation for Business & Government
        </p>
        <h1 className="font-heading text-5xl leading-[0.92] sm:text-6xl md:text-7xl lg:text-[7rem]">
          IGNITE YOUR BUSINESS.
          <br />
          HARNESS THE <span className="text-primary">POWER.</span>
        </h1>
        <p className="font-mono-eyebrow mt-7" style={{ color: "var(--primary)" }}>
          Smart Technology · Honest Advice · Real Results
        </p>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We come in and create a hypernova of efficiency across your data, your workflows, and your
          team. What's left behind is a core of capability so powerful your business revolves around
          it.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:brightness-110 lime-glow"
          >
            Book Your AI Audit — $199 <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-4 text-sm font-bold uppercase tracking-wide text-foreground transition hover:border-primary hover:text-primary"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

const PROBLEMS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Database,
    title: "Unstructured, scattered data",
    body: "PDFs, old spreadsheets, paper forms — AI can't use any of it in that state. Without clean, structured data, AI has no context and can't function well.",
  },
  {
    icon: Clock,
    title: "Time lost to manual work",
    body: "Hours spent on repetitive, low-value tasks that AI could handle automatically — every day. That's time stolen from actually running your business.",
  },
  {
    icon: Compass,
    title: "No clear starting point",
    body: "The AI landscape is overwhelming. Too many tools, too much hype, and no honest guidance on what actually fits a business like yours.",
  },
  {
    icon: Banknote,
    title: "Enterprise solutions built for giants",
    body: "The AI infrastructure big companies pay millions for isn't accessible to small businesses — until now.",
  },
];

function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <p className="font-mono-eyebrow">The Challenge</p>
      <h2 className="mt-4 font-heading text-5xl md:text-7xl">
        MOST BUSINESSES ARE LEAVING
        <br />
        <span className="text-primary">AI ON THE TABLE.</span>
      </h2>
      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <ul className="divide-y divide-border">
          {PROBLEMS.map((p) => (
            <li key={p.title} className="flex gap-5 py-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-card text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative overflow-hidden rounded-lg border border-border bg-card p-10">
          <div aria-hidden className="dot-grid absolute inset-0 opacity-30" />
          <div className="relative">
            <h3 className="font-heading text-3xl leading-tight md:text-4xl">
              YOUR DATA IS YOUR MOST <span className="text-primary">VALUABLE ASSET.</span>
            </h3>
            <p className="mt-5 text-muted-foreground">
              The difference between a business that thrives with AI and one that doesn't isn't
              budget or team size — it's knowing where to start and having the right foundation in
              place. We believe AI is best built from the bottom up.
            </p>
            <blockquote className="mt-7 rounded-r-md border-l-2 border-primary bg-[#23262b] px-5 py-4 text-foreground/90 italic">
              "We get paid to listen to exactly what you need — and then we build it. No templates,
              no generic solutions, no guesswork."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES: { icon: LucideIcon; tag: string; title: string; body: string }[] = [
  {
    icon: GraduationCap,
    tag: "Education",
    title: "Training & Education",
    body: "Hands-on AI training for teams and individuals across five tailored learning paths — from beginner to advanced technical users. From $199/person.",
  },
  {
    icon: Bot,
    tag: "Implementation",
    title: "Professional AI Implementation",
    body: "We design, build, and deploy AI infrastructure for your business — agents, data systems, automation, and dashboards. Custom quote.",
  },
  {
    icon: Receipt,
    tag: "Operations",
    title: "Expenditure Monitoring",
    body: "Snap a photo of a receipt and let AI handle the rest. Automated expense tracking, categorization, and reporting without the manual work.",
  },
  {
    icon: MessageSquare,
    tag: "Engagement",
    title: "Customer Engagement Automation",
    body: "Automated review responses and customer re-engagement campaigns — CRM-level results without the CRM price tag.",
  },
  {
    icon: Smartphone,
    tag: "Marketing",
    title: "Social Media & Content Pipeline",
    body: "AI-powered trend monitoring and content creation that makes your business look like it has a full marketing team — at a fraction of the cost.",
  },
];

const AUDIT_HIGHLIGHTS: { icon: LucideIcon; label: string }[] = [
  { icon: FileText, label: "Custom AI Readiness Report" },
  { icon: MapPinned, label: "Prioritized roadmap" },
  { icon: MessageSquare, label: "Follow-up walkthrough" },
  { icon: Check, label: "No jargon. Honest advice." },
];

function Services() {
  return (
    <section id="services" className="border-t border-border bg-[#121417]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-mono-eyebrow">What We Do</p>
        <h2 className="mt-4 font-heading text-5xl md:text-7xl">
          FIVE SERVICES.
          <br />
          ONE <span className="text-primary">UNSTOPPABLE CORE.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every service is designed to work on its own — or as part of a complete AI transformation
          for your business.
        </p>

        {/* Flagship */}
        <div className="mt-14 overflow-hidden rounded-lg border border-primary/40 bg-card">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-10">
            <div>
              <span className="font-mono-eyebrow inline-flex items-center gap-2 text-primary">
                ★ Flagship Service
              </span>
              <span className="mt-5 grid h-12 w-12 place-items-center rounded-md border border-border bg-background text-primary">
                <Search className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-3xl">The AI Audit</h3>
              <p className="mt-3 text-muted-foreground">
                The smartest first step any business can take. We listen, assess, and deliver a
                customized AI Readiness Report — then show you exactly what to do next. Starts at
                $199.
              </p>
              <a
                href="#audit"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:brightness-110"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 self-center">
              {AUDIT_HIGHLIGHTS.map((h) => (
                <div key={h.label} className="rounded-md border border-border bg-background p-5">
                  <h.icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-7 transition hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-border bg-background text-primary transition group-hover:border-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-mono-eyebrow">{s.tag}</span>
              </div>
              <h3 className="font-heading text-2xl leading-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const AUDIT_STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Discovery Session (30–60 min)",
    body: "We sit with you and listen — no pitch, no agenda. You tell us where your time goes and where the pain points are.",
  },
  {
    n: "02",
    title: "Your AI Readiness Report",
    body: "We produce a branded, prioritized report identifying the best tools, strategies, and quick wins for your specific business.",
  },
  {
    n: "03",
    title: "Follow-Up Walkthrough (30 min)",
    body: "We walk you through every recommendation. Then it's your call — take the roadmap and run, or let us build it for you.",
  },
];

const AUDIT_INCLUDES = [
  "30–60 minute discovery session with an AI expert",
  "Custom AI Readiness Report built for your business",
  "Prioritized tool recommendations & implementation roadmap",
  "Estimated time and cost savings analysis",
  "30-minute follow-up walkthrough of the full report",
  "No jargon. No pressure. Just honest advice.",
];

function Audit() {
  return (
    <section id="audit" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="font-mono-eyebrow">Our Core Offering</p>
          <h2 className="mt-4 font-heading text-5xl md:text-6xl">
            START WITH THE
            <br />
            <span className="text-primary">AI AUDIT.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            AI is the most talked-about topic in business today — and one of the least understood.
            Most owners know they need to be doing something with AI but have no idea where to
            start. That's exactly the gap we fill.
          </p>
          <ul className="mt-10 space-y-7">
            {AUDIT_STEPS.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/40 bg-card font-heading text-primary">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-heading text-xl leading-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-card p-10">
          <div aria-hidden className="dot-grid absolute inset-0 opacity-30" />
          <div className="relative">
            <div className="font-heading text-7xl text-primary">
              <span className="align-top text-3xl">$</span>199
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Flat fee — no surprises</p>
            <ul className="mt-8 divide-y divide-border">
              {AUDIT_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:brightness-110"
            >
              Book Your AI Audit <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROCESS_STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "1",
    title: "Book an AI Audit",
    body: "Tell us about your business, your daily frustrations, and where you're losing the most time. We do the rest.",
  },
  {
    n: "2",
    title: "Get Your Roadmap",
    body: "Receive a custom AI Readiness Report with prioritized recommendations, specific tools, and a clear path forward.",
  },
  {
    n: "3",
    title: "We Build It Together",
    body: "Take the roadmap and act on it yourself — or let us implement everything for you. Either way, you win.",
  },
];

function Process() {
  return (
    <section id="process" className="border-t border-border bg-[#121417]">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="font-mono-eyebrow">The Process</p>
        <h2 className="mt-4 font-heading text-5xl md:text-7xl">
          THREE STEPS TO AI
          <br />
          THAT <span className="text-primary">ACTUALLY WORKS.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Every client journey follows the same proven path — simple, transparent, and built around
          your business.
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {PROCESS_STEPS.map((s) => (
            <div key={s.n} className="flex flex-col items-center">
              <span className="grid h-20 w-20 place-items-center rounded-full border border-primary/40 bg-card font-heading text-3xl text-primary lime-glow">
                {s.n}
              </span>
              <h3 className="mt-6 font-heading text-xl">{s.title}</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type DeepCard = {
  icon: LucideIcon;
  title: string;
  body: string;
  features?: string[];
  process?: { n: string; title: string; sub: string }[];
  href?: string;
  hrefLabel?: string;
};

const DEEP_CARDS: DeepCard[] = [
  {
    icon: Bot,
    title: "AI Agents & Digital Employees",
    body: "Purpose-built AI agents that operate inside your business context — your SOPs, regulations, workflows, and institutional knowledge. Not generic chatbots.",
    features: [
      "Works 24/7 on repetitive, time-consuming tasks",
      "Trained on your documents, policies, and processes",
      "Gets smarter over time through interaction",
      "Connects to your tools via APIs and MCP servers",
      "Scoped for one function or your entire workflow",
    ],
  },
  {
    icon: Database,
    title: "Dead Docs Initiative",
    body: "Most businesses sit on a goldmine of untapped data — PDFs, old spreadsheets, paper forms. AI can't use any of it. We fix that.",
    process: [
      { n: "1", title: "Extract", sub: "All files & formats" },
      { n: "2", title: "Structure", sub: "Cloud database" },
      { n: "3", title: "Modernize", sub: "Digital forms" },
      { n: "4", title: "Visualize", sub: "KPI dashboards" },
      { n: "5", title: "Automate", sub: "Live workflows" },
    ],
    href: "https://dead-docs.com/",
    hrefLabel: "Explore Dead Docs",
  },
  {
    icon: Receipt,
    title: "Expenditure & P-Card Monitoring",
    body: "Snap a receipt photo or upload a PDF — AI handles the rest. No more manual reconciliation, no more hours lost to spreadsheets.",
    features: [
      "Mobile photo capture & PDF upload",
      "AI-powered data extraction & categorization",
      "Centralized reporting dashboard",
      "AI-assisted pricing checks for vendor negotiation",
      "Scales to mid-market with SaaS subscription model",
    ],
  },
  {
    icon: MessageSquare,
    title: "Customer Engagement Automation",
    body: "Keep customers coming back — automatically. CRM-level results without the CRM complexity or price tag.",
    features: [
      "Automated review responses in your brand voice",
      "Win-back campaigns for dormant customers",
      "SMS or email — your choice of channel",
      "Fully automated or human-approved — your call",
      "Improves local SEO as a built-in side benefit",
    ],
  },
  {
    icon: Clapperboard,
    title: "Listing Walkthrough Videos",
    body: "For real estate agents: we turn the listing photos you already have into cinematic walkthrough videos. No shoot, no crew — delivered in 24–48 hours.",
    features: [
      "Cinematic room-by-room edit from your existing photos",
      "16:9 MLS master + 9:16 cut for Reels & TikTok",
      "AI-written listing script & social captions",
      "From $99 per listing — first video just $49",
    ],
    href: "/walkthroughs",
    hrefLabel: "See it in motion",
  },
  {
    icon: Smartphone,
    title: "Social Media & Content Pipeline",
    body: "A full marketing team in a box. Trend monitoring, AI drafting, and scheduled publishing — all in your brand's voice.",
    features: [
      "Daily scraping of trending topics in your industry",
      "AI drafts posts, blogs, and captions in your voice",
      "Human-in-the-loop, automated, or hybrid",
      "Scheduled publishing across X, LinkedIn, Facebook",
      "Consistent presence without the agency fees",
    ],
  },
];

function Implementation() {
  return (
    <section id="implementation" className="mx-auto max-w-7xl px-6 py-28">
      <p className="font-mono-eyebrow">Implementation Services</p>
      <h2 className="mt-4 font-heading text-5xl md:text-7xl">
        WE DON'T JUST ADVISE.
        <br />
        WE <span className="text-primary">BUILD.</span>
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        For businesses ready to move beyond advice and into action — we design, build, and deploy AI
        infrastructure tailored to you.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {DEEP_CARDS.map((c) => {
          const Tag = c.href ? "a" : "article";
          return (
          <Tag
            key={c.title}
            {...(c.href
              ? {
                  href: c.href,
                  // Only external links leave the site in a new tab.
                  ...(c.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}),
                }
              : {})}
            className={`group flex flex-col rounded-lg border border-border bg-card p-8 transition hover:border-primary ${
              c.href ? "cursor-pointer hover:bg-card/80" : ""
            }`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-md border border-border bg-background text-primary">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-2xl leading-tight">{c.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>

            {c.features && (
              <ul className="mt-5 space-y-2.5">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {c.process && (
              <div className="mt-6 grid grid-cols-5 gap-2">
                {c.process.map((p) => (
                  <div key={p.n} className="text-center">
                    <span className="mx-auto grid h-9 w-9 place-items-center rounded-md border border-primary/40 bg-background font-heading text-sm text-primary">
                      {p.n}
                    </span>
                    <h4 className="mt-2 font-heading text-xs">{p.title}</h4>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{p.sub}</p>
                  </div>
                ))}
              </div>
            )}

            {c.href && (
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-heading text-sm text-primary">
                {c.hrefLabel ?? "Learn more"}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            )}
          </Tag>
          );
        })}
      </div>
    </section>
  );
}

type PathLevel = "Basic" | "Intermediate" | "Advanced";
const LEVEL_CLASS: Record<PathLevel, string> = {
  Basic: "bg-[#a5cdff]/15 text-[#a5cdff]",
  Intermediate: "bg-primary/15 text-primary",
  Advanced: "bg-secondary/20 text-secondary",
};

const PATHS: { level: PathLevel; title: string; body: string }[] = [
  {
    level: "Basic",
    title: "ChatGPT for Small Business",
    body: "For teams new to AI. Covers everyday applications — drafting communications, customer responses, research, and time-saving workflows. No technical background needed.",
  },
  {
    level: "Intermediate",
    title: "Claude Cowork",
    body: "Advanced prompting, document workflows, research, and analysis using Claude as a collaborative business tool. For teams ready to go beyond the basics.",
  },
  {
    level: "Intermediate",
    title: "Claude Design",
    body: "Build dashboards, reports, and polished deliverables using Claude's design and artifact capabilities — no designer or developer required.",
  },
  {
    level: "Advanced",
    title: "AI Operating System Design",
    body: "Architect a complete AI-powered operating system for your business. Tool selection, data flow, API connectivity, and building a scalable AI stack from the ground up.",
  },
  {
    level: "Advanced",
    title: "Hermes Agent / Claude Bot Setup",
    body: "Hands-on agent and bot deployment using Hermes and Claude. Define roles, feed business context, connect to live data, and set up continuous improvement loops.",
  },
];

function Training() {
  return (
    <section id="training" className="border-t border-border bg-[#121417]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-mono-eyebrow">Education & Training</p>
        <h2 className="mt-4 font-heading text-5xl md:text-7xl">
          TRAINING BUILT AROUND
          <br />
          YOUR <span className="text-primary">TEAM'S REALITY.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          On-site or virtual sessions for teams and individuals across five focused learning paths.
          Every engagement is tailored — never generic.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PATHS.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-border bg-card p-7 transition hover:border-primary"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${LEVEL_CLASS[p.level]}`}
              >
                {p.level}
              </span>
              <h3 className="mt-4 font-heading text-xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-primary/40 bg-card p-8">
            <p className="font-mono-eyebrow">Group Classes</p>
            <div className="mt-3 font-heading text-4xl">
              $199 <span className="text-lg text-muted-foreground">/person</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">4-hour session · Teams of any size</p>
          </div>
          <div className="rounded-lg border border-primary/40 bg-card p-8">
            <p className="font-mono-eyebrow">Individual Sessions</p>
            <div className="mt-3 font-heading text-4xl">
              $279 <span className="text-lg text-muted-foreground">/hour</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">One-on-one · Fully personalized</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const REASONS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Ear,
    title: "We start by listening",
    body: "Every engagement starts with understanding your business — not pitching a product. The audit exists so we truly know what you need before we recommend anything.",
  },
  {
    icon: Target,
    title: "Everything is customized",
    body: "No templates. No one-size-fits-all packages. Every recommendation, build, and training session is calibrated to your specific business and goals.",
  },
  {
    icon: Wrench,
    title: "We advise and we build",
    body: "Most consultants tell you what to do and leave. We stay and build it — from agents and databases to content pipelines and dashboards.",
  },
  {
    icon: Rocket,
    title: "Bottom-up by design",
    body: "We believe real AI transformation starts at the ground level — your data and daily workflows — not dictated from the top down. That's how it sticks.",
  },
];

function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-28">
      <p className="font-mono-eyebrow">Why Hypernova AI</p>
      <h2 className="mt-4 font-heading text-5xl md:text-7xl">
        HONEST EXPERTS WHO
        <br />
        ACTUALLY <span className="text-primary">BUILD THINGS.</span>
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r) => (
          <div
            key={r.title}
            className="rounded-lg border border-border bg-card p-7 transition hover:border-primary"
          >
            <r.icon className="h-7 w-7 text-primary" />
            <h3 className="mt-5 font-heading text-lg leading-tight">{r.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const PRICING_ROWS: [string, string, string][] = [
  ["AI Audit", "Discovery session + AI Readiness Report + follow-up call", "$199 flat fee"],
  ["Group Training", "4-hour tailored seminar for teams", "$199 / person"],
  ["Individual Training", "One-on-one personalized sessions", "$279 / hour"],
  ["AI Agent Implementation", "Custom digital employees built for your business", "Custom quote"],
  [
    "Dead Docs Initiative",
    "Data extraction, structuring, modernization & automation",
    "Custom quote",
  ],
  [
    "Expenditure Monitoring",
    "AI-powered expense tracking & reporting system",
    "Setup + optional subscription",
  ],
  [
    "Customer Engagement",
    "Automated review responses & re-engagement",
    "Setup + optional retainer",
  ],
  [
    "Content Pipeline",
    "Trend monitoring, AI content & social publishing",
    "Setup + optional retainer",
  ],
];

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-[#0f1113]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-mono-eyebrow">Pricing</p>
        <h2 className="mt-4 font-heading text-5xl md:text-7xl">
          TRANSPARENT PRICING.
          <br />
          NO <span className="text-primary">SURPRISES.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Simple, honest pricing for every service we offer.
        </p>

        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#23262b]">
                {["Service", "Description", "Pricing"].map((h) => (
                  <th key={h} className="font-mono-eyebrow px-6 py-4">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICING_ROWS.map(([service, desc, price]) => (
                <tr key={service} className="border-t border-border">
                  <td className="px-6 py-4 font-heading text-base">{service}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{desc}</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          Not sure where to start? The AI Audit tells you everything — and it's only $199.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative border-t border-border bg-background">
      <div aria-hidden className="dot-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono-eyebrow">Get Started</p>
          <h2 className="mt-4 font-heading text-5xl md:text-6xl">
            START WITH AN AUDIT.
            <br />
            SEE <span className="text-primary">WHAT'S POSSIBLE.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell us about your business. We'll take it from there — no pressure, no jargon, just
            honest advice about what AI can actually do for you.
          </p>
          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" /> hello@hypernovaai.com
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" /> (555) 000-0000
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Serving SMBs & Government Agencies
              Nationwide
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Clock4 className="h-4 w-4 text-primary" /> Responses within 1 business day
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-lg border border-primary/40 bg-card p-8"
        >
          {submitted ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-3xl">REQUEST RECEIVED.</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Thanks — we'll be in touch within one business day to book your AI Audit and confirm
                next steps.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your Name"
                  name="name"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  required
                />
                <Field
                  label="Business Name"
                  name="company"
                  placeholder="Acme Co."
                  autoComplete="organization"
                  required
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@acme.com"
                  autoComplete="email"
                  required
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                />
              </div>
              <div className="grid gap-2">
                <label className="font-mono-eyebrow" htmlFor="message">
                  Where are you losing the most time in your business?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your biggest daily frustrations — manual tasks, data issues, reporting, customer follow-up, anything..."
                  className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-[rgba(149,255,0,0.15)]"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:brightness-110"
              >
                Book My AI Audit — $199 <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your inquiry. We don't share your
                information.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="font-mono-eyebrow" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-[rgba(149,255,0,0.15)]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <img src="/hypernova-icon.png" alt="" aria-hidden="true" className="h-[46px] w-[46px] object-contain" />
            <span className="font-heading text-xl">{COMPANY}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Smart technology. Honest advice. Real results. AI automation for business & government.
          </p>
        </div>
        <FooterCol title="Services" links={["AI Audit", "Training", "Implementation", "Pricing"]} />
        <FooterCol title="Company" links={["About", "Case Studies", "Insights", "Careers"]} />
        <FooterCol title="Legal" links={["Privacy", "Terms", "Security", "Contact"]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <p>AI Automation for Business & Government</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="font-mono-eyebrow">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground transition hover:text-primary">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
