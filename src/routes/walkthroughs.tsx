import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Link2,
  Play,
  Share2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/walkthroughs")({
  head: () => ({
    meta: [
      { title: "Hypernova Walkthroughs — Cinematic Listing Videos from Your Zillow Photos" },
      {
        name: "description",
        content:
          "Paste a Zillow link, get a cinematic walkthrough video in 24–48 hours. No shoot, no crew — built from the listing photos you already have. From $49 for your first video.",
      },
      {
        property: "og:title",
        content: "Hypernova Walkthroughs — Your Listing. In Motion.",
      },
      {
        property: "og:description",
        content:
          "Cinematic listing videos from your existing photos. 16:9 MLS master + 9:16 social cut, delivered in 24–48 hours.",
      },
    ],
  }),
  component: WalkthroughsPage,
});

const COMPANY = "HYPERNOVA AI";

function WalkthroughsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Samples />
      <Included />
      <Pricing />
      <Honesty />
      <Faq />
      <SendListing />
      <Footer />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="w-full border-b border-border bg-[#0f1113] py-2 text-center">
      <p className="font-mono-eyebrow">
        First walkthrough video $49 — see it before you commit to anything
      </p>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/hypernova-icon.png"
            alt=""
            aria-hidden="true"
            className="h-[46px] w-[46px] object-contain"
          />
          <span className="font-heading text-xl tracking-wide">{COMPANY}</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          <Link to="/" className="text-sm text-muted-foreground transition hover:text-foreground">
            Home
          </Link>
          {[
            ["How It Works", "#how"],
            ["Samples", "#samples"],
            ["Pricing", "#pricing"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#start"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:brightness-110"
        >
          Send a Listing <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Same autoplay guarantee as the homepage hero: kick playback explicitly
  // once the file is ready, since muted autoplay is always permitted.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = () => v.play().catch(() => {});
    play();
    v.addEventListener("canplay", play, { once: true });
    return () => v.removeEventListener("canplay", play);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1280px]">
        <video
          ref={videoRef}
          className="block h-[42vh] min-h-[260px] w-full object-cover sm:h-[50vh] lg:h-[58vh]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/walkthroughs/poster-exterior.jpg"
        >
          <source src="/walkthroughs/hero-loop.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pt-14">
        <p className="font-mono-eyebrow mb-6 inline-flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Cinematic Walkthroughs · From Your Photos · 24–48h Delivery
        </p>
        <h1 className="font-heading text-5xl leading-[0.92] sm:text-6xl md:text-7xl lg:text-[7rem]">
          YOUR LISTING.
          <br />
          IN <span className="text-primary">MOTION.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Paste a Zillow link. Get a cinematic walkthrough video in 24–48 hours. No shoot. No
          crew. No scheduling — built from the listing photos you already have.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#start"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:brightness-110"
          >
            Get My First Video — $49 <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#samples"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-4 text-sm font-bold uppercase tracking-wide text-foreground transition hover:border-primary hover:text-primary"
          >
            Watch a Sample
          </a>
        </div>
        <div className="font-mono-eyebrow mt-12 flex flex-wrap gap-x-8 gap-y-3">
          <span>
            <span className="text-primary">16:9</span> MLS + YouTube master
          </span>
          <span>
            <span className="text-primary">9:16</span> Reels + TikTok cut
          </span>
          <span>
            <span className="text-primary">6–10</span> rooms, cinematically directed
          </span>
        </div>
      </div>
    </section>
  );
}

const STATS: [string, string][] = [
  ["~4×", "the inquiries listings with video receive compared to photo-only listings"],
  ["73%", "of sellers say they'd choose an agent who markets their home with video"],
  ["<10%", "of agents actually produce a video for their listings"],
];

function Problem() {
  return (
    <section className="border-t border-border bg-[#0f1113]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-mono-eyebrow">The Gap</p>
        <h2 className="mt-4 font-heading text-5xl md:text-7xl">
          YOUR PHOTOS ARE
          <br />
          STANDING <span className="text-primary">STILL.</span>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STATS.map(([n, body]) => (
            <div
              key={n}
              className="rounded-lg border border-border bg-card p-7 transition hover:border-primary"
            >
              <p className="font-heading text-6xl text-primary">{n}</p>
              <p className="mt-4 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-lg font-bold">
          Sellers expect video. Almost nobody delivers it.{" "}
          <span className="text-primary">That gap is your next listing appointment.</span>
        </p>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: Link2,
    step: "STEP / 01",
    title: "Paste your link",
    body: "Drop your Zillow listing URL in the form below. That's the entire brief — no uploads, no phone tag.",
  },
  {
    icon: Clapperboard,
    step: "STEP / 02",
    title: "We direct the film",
    body: "Our AI pipeline pulls your listing photos and gives every room a cinematic camera move — a slow push through the kitchen, a reveal of the primary suite, a drift across the backyard.",
  },
  {
    icon: Share2,
    step: "STEP / 03",
    title: "You post. It sells.",
    body: "Within 24–48 hours: a 16:9 master for MLS and YouTube, a 9:16 cut for Reels and TikTok, ready to publish with your branding on the end card.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-28">
      <p className="font-mono-eyebrow">How It Works</p>
      <h2 className="mt-4 font-heading text-5xl md:text-7xl">
        THREE STEPS. TWO DAYS.
        <br />
        ZERO <span className="text-primary">SHOOTS.</span>
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <div
            key={s.step}
            className="rounded-lg border border-border bg-card p-7 transition hover:border-primary"
          >
            <div className="flex items-center justify-between">
              <s.icon className="h-7 w-7 text-primary" />
              <span className="font-mono-eyebrow text-primary">{s.step}</span>
            </div>
            <h3 className="mt-5 font-heading text-2xl leading-tight">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const SAMPLES = [
  {
    title: "Exterior",
    move: "Slow aerial approach",
    video: "/walkthroughs/exterior.mp4",
    poster: "/walkthroughs/poster-exterior.jpg",
  },
  {
    title: "Kitchen",
    move: "Gimbal glide",
    video: "/walkthroughs/kitchen.mp4",
    poster: "/walkthroughs/poster-kitchen.jpg",
  },
  {
    title: "Primary Suite",
    move: "Steadicam push-in",
    video: "/walkthroughs/primary-suite.mp4",
    poster: "/walkthroughs/poster-primary-suite.jpg",
  },
];

function SampleCard({ title, move, video, poster }: (typeof SAMPLES)[number]) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    ref.current?.play().catch(() => {});
  };
  const stop = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div
      className="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary"
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <button
        type="button"
        aria-label={playing ? `Pause the ${title} sample` : `Play the ${title} sample`}
        onClick={() => (playing ? stop() : play())}
        className="relative block aspect-video w-full cursor-pointer"
      >
        {/* The poster IS the original listing photo — hover/tap and it moves. */}
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
        />
        <span
          className={`absolute inset-0 grid place-items-center transition-opacity ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground lime-glow">
            <Play className="ml-1 h-6 w-6" />
          </span>
        </span>
        <span className="font-mono-eyebrow absolute left-3 top-3 rounded bg-background/80 px-2 py-1">
          {playing ? "after · in motion" : "before · the photo"}
        </span>
      </button>
      <div className="flex items-center justify-between px-5 py-4">
        <p className="font-heading text-lg">{title}</p>
        <p className="font-mono-eyebrow">{move}</p>
      </div>
    </div>
  );
}

function Samples() {
  return (
    <section id="samples" className="border-t border-border bg-[#0f1113]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-mono-eyebrow">Proof</p>
        <h2 className="mt-4 font-heading text-5xl md:text-7xl">
          SEE THE <span className="text-primary">DIFFERENCE.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every frame starts as a listing photo you already know. Hover — or tap — and watch it
          move.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SAMPLES.map((s) => (
            <SampleCard key={s.title} {...s} />
          ))}
        </div>
        <p className="mt-8 text-sm italic text-muted-foreground">
          Demo footage produced with our production pipeline from licensed listing-style photos.
          Your videos are built from your listing's own photo set.
        </p>
      </div>
    </section>
  );
}

const INCLUDED: [string, string][] = [
  ["Room-by-room cinematic edit", "6–10 rooms, directed camera moves"],
  ["16:9 master file", "MLS, YouTube, your website"],
  ["9:16 social cut", "Reels & TikTok — Premiere and up"],
  ["Listing script & captions", "AI-written from your listing data — Premiere and up"],
  ["Your branding on the end card", "Name, brokerage, contact"],
  ["24–48h delivery + one free revision", "Every video QA'd before it ships"],
];

function Included() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <p className="font-mono-eyebrow">The Package</p>
      <h2 className="mt-4 font-heading text-5xl md:text-7xl">
        EVERY WALKTHROUGH
        <br />
        SHIPS <span className="text-primary">WITH.</span>
      </h2>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INCLUDED.map(([title, sub]) => (
          <div
            key={title}
            className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
          >
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PLANS = [
  {
    tier: "Single",
    name: "Spotlight",
    price: "$99",
    per: "per listing",
    features: ["16:9 cinematic walkthrough", "6–10 rooms", "24–48h delivery"],
    hot: false,
  },
  {
    tier: "Single +",
    name: "Premiere",
    price: "$179",
    per: "per listing",
    features: [
      "Everything in Spotlight",
      "9:16 social cut",
      "Branded end card",
      "AI-written script & captions",
    ],
    hot: true,
  },
  {
    tier: "Monthly",
    name: "Agent Plan",
    price: "$349",
    per: "per month",
    features: ["4 Premiere videos / month", "Extra videos $79", "Priority 24h turnaround"],
    hot: false,
  },
  {
    tier: "Team / Brokerage",
    name: "Let's Talk",
    price: "Custom",
    per: "volume pricing",
    features: ["Volume pricing", "White-label branding", "Dedicated production slot"],
    hot: false,
  },
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
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-lg border bg-card p-7 transition hover:border-primary ${
                p.hot ? "border-primary lime-glow" : "border-border"
              }`}
            >
              {p.hot && (
                <span className="font-mono-eyebrow absolute -top-3 left-6 rounded bg-primary px-2 py-1 !text-primary-foreground">
                  Most Popular
                </span>
              )}
              <span
                className={`inline-block self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                  p.hot ? "bg-primary/15 text-primary" : "bg-[#a5cdff]/15 text-[#a5cdff]"
                }`}
              >
                {p.tier}
              </span>
              <p className="mt-5 font-heading text-5xl">{p.price}</p>
              <p className="font-mono-eyebrow mt-1">{p.per}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#start"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold transition ${
                  p.hot
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {p.price === "Custom" ? "Book a Call" : `Choose ${p.name}`}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-lg font-bold">
          First video <span className="text-primary">$49</span> — see it before you commit to
          anything.
        </p>
      </div>
    </section>
  );
}

function Honesty() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <p className="font-mono-eyebrow">Straight Talk</p>
      <h2 className="mt-4 font-heading text-5xl md:text-7xl">
        WHAT THIS IS —
        <br />
        AND <span className="text-primary">ISN'T.</span>
      </h2>
      <div className="mt-12 rounded-lg border border-border border-l-4 border-l-primary bg-card p-10">
        <p className="max-w-3xl text-lg md:text-xl">
          This is <span className="font-bold text-primary">cinematic motion built from your
          listing photos</span>{" "}
          — not a 3D scan, not a Matterport replacement. It's the video your listing needs on
          Zillow, Instagram, and YouTube, at a tenth of the cost of a video crew. We'd rather tell
          you exactly what you're buying.{" "}
          <span className="font-bold text-primary">That's the Hypernova way.</span>
        </p>
      </div>
    </section>
  );
}

const FAQS: [string, string][] = [
  [
    "How fast will I get my video?",
    "24–48 hours from the moment you send the link. Agent Plan members get priority 24-hour turnaround.",
  ],
  [
    "Do I need new photos?",
    "No. Your existing listing photos are the input — the better the photos, the better the film. If your listing is already on Zillow, you're ready.",
  ],
  [
    "Who owns the video?",
    "You do. Full usage rights — MLS, social, YouTube, ads, your website, wherever it sells the home.",
  ],
  [
    "What if a room looks off?",
    "Every video is quality-checked before delivery, and every order includes one free revision pass. If a room isn't right, we re-direct that scene.",
  ],
  [
    "Does it work for rentals or sold listings?",
    "Yes — any Zillow listing with good photos works: for sale, for rent, or recently sold (great for \"just sold\" social content).",
  ],
  [
    "Can my whole office use this?",
    "That's the Team/Brokerage plan — volume pricing, white-label branding, and a dedicated production slot. Book a call and we'll scope it.",
  ],
];

function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-[#0f1113]">
      <div className="mx-auto max-w-4xl px-6 py-28">
        <p className="font-mono-eyebrow">Questions</p>
        <h2 className="mt-4 font-heading text-5xl md:text-7xl">
          BEFORE YOU <span className="text-primary">ASK.</span>
        </h2>
        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-left text-base font-bold">{q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function SendListing() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="start" className="relative border-t border-border bg-background">
      <div aria-hidden className="dot-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono-eyebrow">Start Here</p>
          <h2 className="mt-4 font-heading text-5xl md:text-6xl">
            SEND US A<br />
            <span className="text-primary">LISTING.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            One link. That's the whole brief. We pull the photos, direct the film, and deliver
            your walkthrough in 24–48 hours — with one free revision pass if anything's not
            right.
          </p>
          <ul className="mt-10 space-y-4 text-sm">
            {[
              "Confirmation within a few hours",
              "Delivery in 24–48 hours",
              "You own the video outright",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" /> {t}
              </li>
            ))}
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
              <h3 className="mt-6 font-heading text-3xl">LISTING RECEIVED.</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                We'll confirm within a few hours and deliver your walkthrough in 24–48. Watch
                your inbox.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              <Field
                label="Zillow Listing URL"
                name="zillow-url"
                type="url"
                placeholder="https://www.zillow.com/homedetails/..."
                required
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@yourbrokerage.com"
                  autoComplete="email"
                  required
                />
                <Field
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                />
              </div>
              <div className="grid gap-2">
                <label className="font-mono-eyebrow" htmlFor="package">
                  Package
                </label>
                <select
                  id="package"
                  name="package"
                  defaultValue="first"
                  className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-[rgba(149,255,0,0.15)]"
                >
                  <option value="first">First Video — $49</option>
                  <option value="spotlight">Spotlight — $99</option>
                  <option value="premiere">Premiere — $179</option>
                  <option value="agent-plan">Agent Plan — $349/mo</option>
                  <option value="team">Team / Brokerage — Let's talk</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:brightness-110"
              >
                Start My Walkthrough <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                Powered by the Hypernova AI pipeline. By submitting, you agree to be contacted
                about your order. We don't share your information.
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
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/hypernova-icon.png"
              alt=""
              aria-hidden="true"
              className="h-[46px] w-[46px] object-contain"
            />
            <span className="font-heading text-xl">{COMPANY}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Hypernova Walkthroughs — cinematic listing videos from the photos you already have. A
            Hypernova AI service.
          </p>
        </div>
        <div>
          <p className="font-mono-eyebrow">Explore</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/" className="text-sm text-muted-foreground transition hover:text-primary">
                Hypernova AI Home
              </Link>
            </li>
            {[
              ["Samples", "#samples"],
              ["Pricing", "#pricing"],
              ["Send a Listing", "#start"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <p>Your Listing. In Motion.</p>
        </div>
      </div>
    </footer>
  );
}
