"use client";
import { motion } from "framer-motion";
import { Terminal, Cpu, ArrowRight } from "lucide-react";

export default function WebDevHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FFAB]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00FFAB]/20 bg-[#00FFAB]/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFAB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFAB]"></span>
              </span>
              <span className="text-[10px] font-mono text-[#00FFAB] uppercase tracking-[0.3em]">
                Full_Stack_Availability: High
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.85]"
            >
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-emerald-400 to-[#00FFAB] animate-gradient-x">
                Infrastructure
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Custom-built web ecosystems designed to scale. From
              <span className="text-white italic"> WordPress </span> to
              <span className="text-white italic"> Django </span>, we deploy the
              perfect stack for your specific mission parameters.
            </motion.p>
          </div>

          {/* Technical Spec Card (Visual Appeal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-[400px] p-8 rounded-[2.5rem] bg-zinc-950 border border-white/10 relative"
          >
            <div className="absolute inset-0 bg-grid-white opacity-[0.03] rounded-[2.5rem]" />
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center">
                <Terminal size={20} className="text-[#00FFAB]" />
                <span className="text-[9px] font-mono text-zinc-600">
                  SYS_ANALYSIS_099
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Architecture", val: "Requirement_First" },
                  { label: "Deployment", val: "Global_Edge" },
                  { label: "Security", val: "Hardened_SSL" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/5 pb-2"
                  >
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      {stat.label}
                    </span>
                    <span className="text-[10px] font-mono text-[#00FFAB]">
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 bg-white text-black py-4 rounded-2xl font-black italic uppercase text-sm hover:bg-[#00FFAB] transition-colors flex items-center justify-center gap-2 group">
                Request Blueprint{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
