"use client";
import { motion } from "framer-motion";
import { Cpu, Zap, Database, Globe } from "lucide-react";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
// (Your 'services' JSON data remains the same)
const services = [
  {
    title: "Technical Architecture",
    desc: "Next.js 16 + Turbopack. We build frameworks, not just websites.",
    icon: <Cpu size={24} />,
    dataPoints: ["LCP: 0.8s", "TTFB: 12ms", "DOM_NODES: <1500"],
    status: "OPTIMIZED",
  },
  {
    title: "Core Web Vitals",
    desc: "99+ Lighthouse performance as a standard.",
    icon: <Zap size={24} />,
    dataPoints: ["CLS: 0", "INP: 40ms"],
    status: "ACTIVE",
  },
  {
    title: "Semantic Engineering",
    desc: "Schema.org graphs that search engines crave.",
    icon: <Database size={24} />,
    dataPoints: ["JSON-LD: VALID", "GRAPH: DEEP"],
    status: "PARSING",
  },
  {
    title: "Edge SEO",
    desc: "Global delivery at 0ms latency via Middleware.",
    icon: <Globe size={24} />,
    dataPoints: ["REGION: GLOBAL", "TTL: PERSISTENT"],
    status: "ROUTING",
  },
];

export default function ServicesGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); // Keeping for spotlight effect

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative bg-grid-white">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Engineered to <span className="text-[#00FFAB]">Rank.</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          We don&apos;t just &quot;do SEO.&quot; We build high-performance
          search infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        {" "}
        {/* Changed to 12-column grid */}
        {/* Left Section: Service Cards (col-span-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          {/* Cards now take 2 columns */}
          {services.map((s, i) => (
            <motion.div
              key={i}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              className="relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-950/40 p-[1px] backdrop-blur-3xl"
            >
              {/* Interactive Spotlight Overlay */}
              <div
                className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,171,0.1), transparent 40%)`,
                }}
              />

              <div className="h-full w-full rounded-[2.4rem] bg-zinc-900/60 p-8 flex flex-col justify-between relative overflow-hidden z-10">
                {/* Background Decoration Layers */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00FFAB_1.5px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FFAB]/5 to-transparent h-24 w-full animate-scan pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 rounded-2xl bg-black border border-white/10 text-[#00FFAB] shadow-[0_0_20px_rgba(0,255,171,0.15)] group-hover:border-[#00FFAB]/50 transition-all duration-500">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 tracking-tighter">
                      {`0${i + 1} // ${s.status}`}
                    </span>
                  </div>

                  <h3 className="font-bold text-white tracking-tight mb-4 text-3xl">
                    {" "}
                    {/* Standardized size */}
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-base">
                    {" "}
                    {/* Standardized size */}
                    {s.desc}
                  </p>
                </div>

                {/* Live Technical Data Readouts */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {s.dataPoints.map((point, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-[#00FFAB]/70 uppercase tracking-widest"
                    >
                      {point}
                    </span>
                  ))}
                </div>

                {/* Status Footer */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((d) => (
                      <div
                        key={d}
                        className="h-1 w-6 bg-zinc-800 rounded-full overflow-hidden"
                      >
                        <div
                          className="h-full w-full bg-[#00FFAB]/40 animate-status-prog"
                          style={{ animationDelay: `${d * 0.3}s` }}
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 tracking-[0.2em]">
                    PRTCL_STABLE
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Right Section: Image (col-span-4) */}
        <div className="lg:col-span-4 relative rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-none z-10" />
          <div className="absolute inset-0 bg-grid-white opacity-20 z-10" />
          <CldImage
            src="api-seo-brain_mrx6iw.jpg"
            fill
            alt="Technical Intelligence Engine"
            className="object-cover"
            // This tells the browser: "On desktop, this is about 1/3 of the screen width"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            // Remove or increase the quality if it's too aggressive
            quality={100}
            // Ensure no "blur" placeholder is lingering
            placeholder="empty"
          />
          {/* <motion.img
            src="https://res.cloudinary.com/dconifkrd/image/upload/v1766434047/api-seo-brain_mrx6iw.jpg" // We will generate this image
            alt="AI-powered SEO brain with data flows"
            className="w-full h-full object-cover rounded-[2.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          /> */}
          <div className="absolute inset-0 flex items-end p-8 z-20">
            <p className="text-white text-lg font-semibold bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
              Next-Gen SEO Infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
