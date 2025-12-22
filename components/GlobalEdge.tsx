"use client";
import { motion } from "framer-motion";

export default function GlobalEdge() {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Technical Copy */}
        <div>
          <span className="text-[#00FFAB] font-mono text-xs tracking-widest uppercase">
            Infrastructure
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 tracking-tighter">
            Global Edge Deployment
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
            Your site is served from the edge. We leverage global network to
            ensure sub-100ms latency, regardless of user location.
          </p>

          <div className="mt-8 flex gap-6">
            <div>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-xs font-mono text-zinc-500 uppercase">
                Edge Nodes
              </div>
            </div>
            <div className="h-10 w-[1px] bg-zinc-800" />
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-xs font-mono text-zinc-500 uppercase">
                Uptime
              </div>
            </div>
          </div>
        </div>

        {/* Right: The "Ping" Map Visualization */}
        <div className="relative aspect-video bg-zinc-900/40 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Animated Pings */}
          {[
            { top: "30%", left: "20%" }, // North America
            { top: "40%", left: "50%" }, // Europe
            { top: "60%", left: "80%" }, // Asia
            { top: "70%", left: "30%" }, // South America
          ].map((pos, i) => (
            <div key={i} className="absolute" style={pos}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFAB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FFAB]"></span>
              </span>
            </div>
          ))}

          <div className="text-zinc-600 font-mono text-[10px] uppercase">
            Network Status: Active
          </div>
        </div>
      </div>
    </section>
  );
}
