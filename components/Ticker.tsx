"use client";

const tickerItems = [
  "99+ LIGHTHOUSE SCORE",
  "CORE WEB VITALS OPTIMIZED",
  "TECHNICAL SEO ARCHITECTURE",
  "INTERNATIONAL SEO READY",
  "ENTERPRISE PERFORMANCE",
];

export default function Ticker() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-zinc-950/20 py-4 md:py-6 backdrop-blur-md">
      {/* The scrolling container */}
      <div className="flex w-max items-center animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={index}
            className="mx-8 md:mx-12 flex items-center gap-3 md:gap-4 whitespace-nowrap"
          >
            {/* The "Glow" Dot */}
            <div className="h-1.5 w-1.5 rounded-full bg-[#00FFAB] shadow-[0_0_12px_#00FFAB]" />

            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-zinc-400 uppercase italic">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* High-end edge fades to prevent "harsh" cuts on the sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent" />
    </div>
  );
}
