"use client";
import { motion } from "framer-motion";

export default function GlobalEdge() {
  const nodes = [
    { top: "32%", left: "22%", delay: 0.2, city: "San Francisco" },
    { top: "35%", left: "48%", delay: 0.4, city: "London" },
    { top: "55%", left: "82%", delay: 0.6, city: "Tokyo" },
    { top: "72%", left: "32%", delay: 0.8, city: "Sao Paulo" },
    { top: "45%", left: "72%", delay: 1.0, city: "Mumbai" },
  ];

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#00FFAB] font-mono text-xs tracking-widest uppercase">
            Infrastructure
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 tracking-tighter">
            Global Edge Deployment
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
            Your site is served from the edge. We leverage Vercel&apos;s global
            network to ensure sub-100ms latency for users in {nodes.length}{" "}
            major regions.
          </p>
        </motion.div>

        {/* The Map Visualization */}
        <div className="relative aspect-video bg-zinc-900/20 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-10 bg-size-[30px_30px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

          {/* SVG World Map Background */}
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 w-full h-full opacity-20 fill-zinc-700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M150,150 L180,140 L220,160 L240,200 L210,240 L160,230 Z M450,100 L500,90 L550,110 L560,160 L510,180 L460,150 Z M750,150 L820,160 L850,220 L800,280 L720,250 Z M250,300 L320,320 L300,400 L220,380 Z" />
            {/* Note: In a real project, you'd paste a full World SVG Path here for accuracy */}
            <circle
              cx="500"
              cy="250"
              r="200"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Animated Pings */}
          {nodes.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute group"
              style={{ top: pos.top, left: pos.left }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: pos.delay, duration: 0.5 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFAB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FFAB]"></span>
              </span>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-[10px] text-black font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {pos.city}
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-4 right-4 text-zinc-600 font-mono text-[10px] uppercase tracking-widest bg-black/50 px-2 py-1 rounded border border-white/5">
            System Status: Optimal
          </div>
        </div>
      </div>
    </section>
  );
}
