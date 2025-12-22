"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 lg:py-32 border-b border-zinc-800">
      {/* Background Radial Glow */}
      <div className="absolute top-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-brand/10 opacity-50 blur-[100px]" />
      </div>

      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* SEO Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-xs font-medium tracking-wider text-brand uppercase mb-8 glow-brand">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Next.js 16.1 Certified Architecture
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter text-balance leading-[0.9] mb-8">
            SEO as an <br />
            <span className="text-brand">Engineering</span> Discipline.
          </h1>

          <p className="mx-auto max-w-2xl font-sans text-lg md:text-xl text-zinc-400 mb-12 text-balance leading-relaxed">
            We build lightning-fast digital infrastructure for global brands. No
            bloat. No legacy code. Just{" "}
            <span className="text-foreground font-semibold">
              Speed as a Signal.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="glow-brand bg-brand text-background px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-brand/20">
              Run Performance Audit
            </button>
            <button className="border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 px-10 py-4 rounded-xl font-medium transition-all hover:border-zinc-700">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
