import { useEffect, useRef, useState, useMemo } from "react";

const TARGET = 2_500_000;
const DURATION = 2000;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

const CHARS = ["0", "1", "A", "B", "C"];

function ScatteredChars() {
  const items = useMemo(() => {
    const seed = 42;
    const results = [];
    for (let i = 0; i < 15; i++) {
      const s = Math.sin(seed + i * 127.1) * 43758.5453;
      const r = s - Math.floor(s);
      const s2 = Math.sin(seed + i * 269.5) * 18462.312;
      const r2 = s2 - Math.floor(s2);
      const s3 = Math.sin(seed + i * 413.7) * 29187.643;
      const r3 = s3 - Math.floor(s3);

      results.push({
        char: CHARS[i % CHARS.length],
        left: `${50 + r * 45}%`,
        top: `${5 + r2 * 90}%`,
        opacity: 0.08 + r3 * 0.1,
        size: 48 + r3 * 72,
        rotate: Math.floor(r * 360),
      });
    }
    return results;
  }, []);

  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute font-mono font-bold select-none pointer-events-none"
          style={{
            left: item.left,
            top: item.top,
            opacity: item.opacity,
            fontSize: `clamp(${Math.round(item.size * 0.4)}px, ${(item.size / 7.68).toFixed(2)}vw, ${item.size}px)`,
            color: "#9542f4",
            transform: `rotate(${item.rotate}deg)`,
          }}
        >
          {item.char}
        </span>
      ))}
    </>
  );
}

export default function StatsSection() {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / DURATION, 1);
            const eased = easeOutExpo(progress);
            setCount(Math.round(eased * TARGET));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const formatted = new Intl.NumberFormat("en-US").format(count);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20">
      {/* Scattered characters background */}
      <ScatteredChars />

      <div className="relative flex flex-col items-center justify-center text-center min-h-[400px] px-4">
        <span className="font-sans text-xl text-white/60 mb-6 max-md:text-base max-md:mb-4">Over</span>
        <span className="font-display text-[136px] leading-[100px] text-[#95ff00] text-glow-lime max-md:text-[64px] max-md:leading-[60px] max-[400px]:text-[52px] max-[400px]:leading-[50px]">
          {formatted}
        </span>
        <span className="font-sans text-xl text-white/60 mt-4 max-md:text-base max-md:mt-3">
          documents resurrected
        </span>
      </div>
    </section>
  );
}
