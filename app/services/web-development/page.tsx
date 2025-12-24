"use client";
import WebDevHero from "@/components/services/WebDevHero";
import { motion } from "framer-motion";
import {
  Code2,
  ShoppingBag,
  Globe,
  Database,
  Layers,
  CheckCircle,
} from "lucide-react";
const steps = [
  {
    step: "01",
    title: "Logic Audit",
    desc: "We analyze your traffic goals and business requirements to select the optimal stack.",
  },
  {
    step: "02",
    title: "System Design",
    desc: "Prototyping the architecture, user flows, and database schemas.",
  },
  {
    step: "03",
    title: "Engine Build",
    desc: "Clean-code development using your chosen technology—WordPress, Next.js, or Django.",
  },
  {
    step: "04",
    title: "Edge Deploy",
    desc: "Final optimization and deployment to global edge networks for sub-second speeds.",
  },
];
const stacks = [
  {
    category: "Custom Applications",
    engines: ["Next.js", "React", "TypeScript"],
    backend: ["Django", "Express", "Flask"],
    db: ["PostgreSQL", "MySQL"],
    desc: "Complex SaaS and internal tools built with high-performance frameworks.",
  },
  {
    category: "Scaleable E-Commerce",
    engines: ["Shopify", "WooCommerce", "Headless"],
    backend: ["Liquid", "PHP", "Node.js"],
    db: ["Cloud-Native"],
    desc: "From standard storefronts to high-volume headless commerce architectures.",
  },
  {
    category: "Content Management",
    engines: ["WordPress", "Sanity.io"],
    backend: ["PHP", "JavaScript"],
    db: ["MySQL", "Groq"],
    desc: "Empowering teams to manage content with modern, secure CMS solutions.",
  },
];

export default function WebDevPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-black relative">
      <WebDevHero />
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* The Stack Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-[2rem] bg-zinc-950 border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <Layers size={40} className="text-[#00FFAB]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                {stack.category}
              </h3>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                {stack.desc}
              </p>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-2 underline decoration-[#00FFAB]/30">
                    Frontend_Engines
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stack.engines.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded bg-white/5 text-[10px] text-zinc-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-2 underline decoration-[#00FFAB]/30">
                    Backend_Logic
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stack.backend.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded bg-white/5 text-[10px] text-zinc-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-2 underline decoration-[#00FFAB]/30">
                    Data_Storage
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stack.db.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded bg-white/5 text-[10px] text-zinc-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reliability Section */}
        <div className="p-12 rounded-[3rem] bg-[#00FFAB]/5 border border-[#00FFAB]/20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4 italic uppercase tracking-tighter">
              Engineered for Performance
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Regardless of the stack, we ensure every deployment meets our core
              standards: security, SEO architecture, and sub-second load times.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "SSL Encrypted",
                "SEO Ready",
                "Scalable Architecture",
                "Responsive",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase"
                >
                  <CheckCircle size={14} className="text-[#00FFAB]" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-black rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden">
            <Code2 size={120} className="text-[#00FFAB]/20 absolute" />
            <div className="z-10 text-center">
              <p className="text-[10px] font-mono text-[#00FFAB] tracking-[0.3em] uppercase mb-2">
                Build_Status
              </p>
              <p className="text-3xl font-black text-white italic">STABLE</p>
            </div>
          </div>
        </div>
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="space-y-4">
                <span className="text-4xl font-black text-[#00FFAB] italic outline-text">
                  {s.step}
                </span>
                <h4 className="text-xl font-bold text-white uppercase italic">
                  {s.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
