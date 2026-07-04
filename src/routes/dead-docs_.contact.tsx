import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import Navbar from "@/components/dead-docs/Navbar";
import Footer from "@/components/dead-docs/Footer";
import { ArrowRightIcon } from "@/components/dead-docs/icons";

const CONTACT_EMAIL = "hello@dead-docs.com";

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

type DayCell = {
  date: Date;
  inMonth: boolean;
  isPast: boolean;
  isWeekend: boolean;
};

function buildMonth(anchor: Date): { label: string; cells: DayCell[] } {
  const year = anchor.getFullYear();
  const month = anchor.getMonth();
  const first = new Date(year, month, 1);
  const startOffset = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cells: DayCell[] = [];

  for (let i = 0; i < startOffset; i++) {
    const d = new Date(year, month, i - startOffset + 1);
    cells.push({
      date: d,
      inMonth: false,
      isPast: d < today,
      isWeekend: d.getDay() === 0 || d.getDay() === 6,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    cells.push({
      date: d,
      inMonth: true,
      isPast: d < today,
      isWeekend: d.getDay() === 0 || d.getDay() === 6,
    });
  }

  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date;
    const d = new Date(last);
    d.setDate(last.getDate() + 1);
    cells.push({
      date: d,
      inMonth: false,
      isPast: d < today,
      isWeekend: d.getDay() === 0 || d.getDay() === 6,
    });
  }

  const label = anchor.toLocaleString("en-US", { month: "long", year: "numeric" });
  return { label, cells };
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}


export const Route = createFileRoute("/dead-docs_/contact")({
  head: () => ({
    meta: [
      { title: "Book a Demo — Dead Docs by Hypernova AI" },
      {
        name: "description",
        content:
          "Book a demo of Dead Docs — we extract and structure the data trapped in your buried documents and deliver a custom portal.",
      },
    ],
  }),
  component: ContactPage,
});
function ContactPage() {
  const initialAnchor = useMemo(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  }, []);

  const [anchor, setAnchor] = useState<Date>(initialAnchor);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [volume, setVolume] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { label, cells } = useMemo(() => buildMonth(anchor), [anchor]);

  const selectedLabel =
    selectedDate && selectedSlot
      ? `${formatDate(selectedDate)} at ${selectedSlot}`
      : selectedDate
      ? formatDate(selectedDate)
      : "";

  function shiftMonth(delta: number) {
    const next = new Date(anchor);
    next.setMonth(anchor.getMonth() + delta);
    setAnchor(next);
  }

  function pickDay(cell: DayCell) {
    if (!cell.inMonth || cell.isPast || cell.isWeekend) return;
    setSelectedDate(cell.date);
    setSelectedSlot(null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = selectedLabel
      ? `Demo request — ${selectedLabel}`
      : "Demo request";

    const bodyLines = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Work email: ${email}`,
      volume ? `Approx. document volume: ${volume}` : null,
      selectedLabel ? `Preferred time: ${selectedLabel}` : null,
      "",
      "Notes:",
      message || "(none)",
    ].filter(Boolean);

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  const weekdayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Dotted background */}
        <img
          src="/dead-docs/backgrounds/dotted-background.svg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.06] invert"
        />

        <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 max-md:pt-12 max-md:pb-16">
          {/* Header */}
          <div className="flex flex-col items-start max-w-[780px]">
            <span className="flex items-center gap-1.5 font-sans text-[15px] font-medium text-[#95ff00]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#95ff00]" />
              Talk to us
            </span>
            <h1 className="font-display text-[72px] leading-[76px] tracking-[-0.5px] text-white uppercase mt-4 max-md:text-[44px] max-md:leading-[48px]">
              LET&apos;S RESURRECT YOUR DOCUMENTS.
            </h1>
            <p className="font-sans text-lg text-white/60 mt-4 max-w-[600px] max-md:text-base">
              Send us a note or grab a time on the calendar. We&apos;ll come back
              within one business day with scope, pricing, and next steps.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-2 gap-10 mt-14 max-lg:grid-cols-1 max-lg:gap-12">
            {/* LEFT: Email form */}
            <section
              id="email-us"
              className="bg-[#1e2024] border border-[#2a2d32] rounded-xl p-8 max-md:p-6"
            >
              <div className="flex items-center gap-2 text-[#95ff00]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3.5 6.5l8.5 7 8.5-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="font-display text-[28px] text-white uppercase">
                  Send a message
                </h2>
              </div>
              <p className="font-sans text-sm text-white/60 mt-2">
                We&apos;ll open your email client with everything pre-filled.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  <label className="flex flex-col gap-1.5">
                    <span className="font-sans text-[13px] text-white/60">
                      Full name
                    </span>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#15171a] border border-[#2a2d32] focus:border-[#95ff00] outline-none rounded-md px-3 py-2.5 text-white font-sans text-[15px] transition-colors"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="font-sans text-[13px] text-white/60">
                      Company
                    </span>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-[#15171a] border border-[#2a2d32] focus:border-[#95ff00] outline-none rounded-md px-3 py-2.5 text-white font-sans text-[15px] transition-colors"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="font-sans text-[13px] text-white/60">
                    Work email
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#15171a] border border-[#2a2d32] focus:border-[#95ff00] outline-none rounded-md px-3 py-2.5 text-white font-sans text-[15px] transition-colors"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-sans text-[13px] text-white/60">
                    Approximate document volume (optional)
                  </span>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="bg-[#15171a] border border-[#2a2d32] focus:border-[#95ff00] outline-none rounded-md px-3 py-2.5 text-white font-sans text-[15px] transition-colors"
                  >
                    <option value="">Select a range…</option>
                    <option value="Under 10k">Under 10,000</option>
                    <option value="10k–100k">10,000 – 100,000</option>
                    <option value="100k–1M">100,000 – 1,000,000</option>
                    <option value="Over 1M">Over 1,000,000</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-sans text-[13px] text-white/60">
                    What are you trying to resurrect?
                  </span>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-[#15171a] border border-[#2a2d32] focus:border-[#95ff00] outline-none rounded-md px-3 py-2.5 text-white font-sans text-[15px] resize-y transition-colors"
                  />
                </label>

                {selectedLabel && (
                  <div className="bg-[#15171a] border border-[#95ff00]/30 rounded-md px-3 py-2.5">
                    <span className="font-sans text-[13px] text-white/60">
                      Preferred time:
                    </span>{" "}
                    <span className="font-sans text-[15px] text-[#95ff00]">
                      {selectedLabel}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-[#95ff00] text-[#15171a] border border-[#78d600] rounded-none text-[16px] font-medium h-[52px] px-6 hover:bg-[#78d600] transition-colors"
                >
                  Send message
                  <ArrowRightIcon />
                </button>

                {submitted && (
                  <p className="font-sans text-[13px] text-white/60 mt-1">
                    Email client not opening? Write to{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="underline text-[#95ff00]"
                    >
                      {CONTACT_EMAIL}
                    </a>{" "}
                    directly.
                  </p>
                )}
              </form>
            </section>

            {/* RIGHT: Calendar */}
            <section className="bg-[#1e2024] border border-[#2a2d32] rounded-xl p-8 max-md:p-6">
              <div className="flex items-center gap-2 text-[#95ff00]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 9h18M8 3v4M16 3v4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <h2 className="font-display text-[28px] text-white uppercase">
                  Schedule a time
                </h2>
              </div>
              <p className="font-sans text-sm text-white/60 mt-2">
                Pick a day and a slot — we&apos;ll confirm by email.
              </p>

              {/* Month header */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => shiftMonth(-1)}
                  className="w-8 h-8 inline-flex items-center justify-center border border-[#2a2d32] rounded-md text-white/70 hover:text-white hover:border-[#95ff00]/50 transition-colors"
                  aria-label="Previous month"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span className="font-display text-[20px] text-white uppercase tracking-wide">
                  {label}
                </span>
                <button
                  type="button"
                  onClick={() => shiftMonth(1)}
                  className="w-8 h-8 inline-flex items-center justify-center border border-[#2a2d32] rounded-md text-white/70 hover:text-white hover:border-[#95ff00]/50 transition-colors"
                  aria-label="Next month"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Day grid */}
              <div className="mt-4 grid grid-cols-7 gap-1">
                {weekdayHeaders.map((d) => (
                  <div
                    key={d}
                    className="text-center font-sans text-[11px] text-white/40 uppercase tracking-wider py-2"
                  >
                    {d}
                  </div>
                ))}
                {cells.map((cell, idx) => {
                  const disabled =
                    !cell.inMonth || cell.isPast || cell.isWeekend;
                  const isSelected =
                    selectedDate &&
                    cell.date.toDateString() === selectedDate.toDateString();
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => pickDay(cell)}
                      disabled={disabled}
                      className={`aspect-square flex items-center justify-center rounded-md font-sans text-[14px] transition-colors ${
                        !cell.inMonth
                          ? "text-white/20"
                          : disabled
                          ? "text-white/25 cursor-not-allowed"
                          : isSelected
                          ? "bg-[#95ff00] text-[#15171a] font-semibold"
                          : "text-white/80 hover:bg-[#2a2d32] cursor-pointer"
                      }`}
                    >
                      {cell.date.getDate()}
                    </button>
                  );
                })}
              </div>

              {/* Time slots */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-[13px] text-white/60 uppercase tracking-wider">
                    {selectedDate
                      ? `Available — ${formatDate(selectedDate)}`
                      : "Pick a day above"}
                  </span>
                  <span className="font-sans text-[11px] text-white/40">
                    Times shown in your local zone
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 max-md:grid-cols-2">
                  {TIME_SLOTS.map((slot) => {
                    const active = selectedSlot === slot;
                    const disabled = !selectedDate;
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={disabled}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2.5 border rounded-md font-sans text-[14px] transition-colors ${
                          disabled
                            ? "border-[#2a2d32] text-white/25 cursor-not-allowed"
                            : active
                            ? "bg-[#95ff00] text-[#15171a] border-[#78d600] font-medium"
                            : "border-[#2a2d32] text-white hover:border-[#95ff00]/50"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA to confirm */}
              <div className="mt-6 pt-6 border-t border-[#2a2d32]">
                {selectedDate && selectedSlot ? (
                  <a
                    href="#email-us"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#95ff00] text-[#15171a] border border-[#78d600] rounded-none text-[15px] font-medium h-[48px] px-5 hover:bg-[#78d600] transition-colors"
                  >
                    Confirm {selectedLabel}
                    <ArrowRightIcon />
                  </a>
                ) : (
                  <p className="font-sans text-[13px] text-white/50 text-center">
                    Pick a day and a time to continue.
                  </p>
                )}
                <p className="font-sans text-[12px] text-white/40 mt-3 text-center">
                  Live scheduling via Cal.com rolling out soon — for now we&apos;ll
                  confirm by email.
                </p>
              </div>
            </section>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            <span className="font-sans text-[13px] text-white/40">
              SOC2 & HIPAA compliant
            </span>
            <span className="font-sans text-[13px] text-white/20">•</span>
            <span className="font-sans text-[13px] text-white/40">
              Deploy in your environment
            </span>
            <span className="font-sans text-[13px] text-white/20">•</span>
            <span className="font-sans text-[13px] text-white/40">
              NDA on request
            </span>
            <span className="font-sans text-[13px] text-white/20">•</span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-sans text-[13px] text-[#95ff00] hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
