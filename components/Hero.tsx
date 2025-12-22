"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden border-b border-zinc-800/50 bg-[#09090B]">
      {/* 1. Enhanced "Techy Breeze" Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top-Left Orb - Brighter & Faster */}
        <motion.div
          animate={{
            x: [-20, 40, -20],
            y: [0, 30, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[5%] -left-[5%] h-[70%] w-[70%] rounded-full bg-[#00FFAB]/20 blur-[110px]"
        />

        {/* Bottom-Right Orb - Counter movement */}
        <motion.div
          animate={{
            x: [20, -50, 20],
            y: [0, -40, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] -right-[5%] h-[60%] w-[60%] rounded-full bg-[#00FFAB]/15 blur-[130px]"
        />
      </div>

      {/* 2. Engineering Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_75%,transparent_100%)]" />

      <div className="relative z-10 w-full max-w-7xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00FFAB]/30 bg-[#00FFAB]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-[#00FFAB] uppercase mb-12 shadow-[0_0_15px_rgba(0,255,171,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#00FFAB] opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#00FFAB]"></span>
            </span>
            Next.js 16.1 Certified Architecture
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8 text-white">
            Search Visibility <br />{" "}
            <span className="bg-gradient-to-r from-[#00FFAB] to-[#008F60] bg-clip-text text-transparent">
              By Design.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-400 mb-14 text-balance font-medium">
            Technical SEO isn&apos;t an afterthought—it&apos;s the blueprint. We
            build the fast, crawlable, and secure platforms that modern search
            engines demand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* TODO: Implement Audit Tool Modal or Redirect here */}
            <button className="w-full sm:w-auto bg-[#00FFAB] text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-all cursor-pointer shadow-[0_0_30px_rgba(0,255,171,0.4)]">
              Launch FREE Audit
            </button>
            <button className="w-full sm:w-auto border border-zinc-800 bg-zinc-950/50 backdrop-blur-md hover:bg-zinc-900 px-10 py-5 rounded-full font-medium transition-all text-zinc-300 hover:border-[#00FFAB]/30">
              Explore Our Engineering
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
