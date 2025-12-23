"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAuditScore } from "@/app/actions/audit";
import { AuditResults } from "@/types/audit";
import {
  Zap,
  ShieldAlert,
  Search,
  Globe,
  Activity,
  Database,
  Server,
  Terminal,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Clock,
  Layout,
} from "lucide-react";

const LOADING_STEPS = [
  "INITIALIZING_V8_ENGINE...",
  "ESTABLISHING_SECURE_HANDSHAKE...",
  "INJECTING_LIGHTHOUSE_PROBE...",
  "MAPPING_DOM_RESOURCES...",
  "CALCULATING_INTERACTION_LATENCY...",
  "FINALIZING_REPORT_DATA...",
];

export default function AuditTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [results, setResults] = useState<AuditResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) =>
          prev < LOADING_STEPS.length - 1 ? prev + 1 : prev
        );
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setLoadingStep(0);
    };
  }, [loading]);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);
    setError(null);
    try {
      const data = await getAuditScore(url);
      setResults(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "TERMINAL_CRASH");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* 1. INPUT SECTION */}
      <div
        className={`transition-all duration-500 ${
          loading ? "opacity-30 pointer-events-none blur-sm" : "opacity-100"
        }`}
      >
        <div className="bg-zinc-900 border border-white/5 p-10 rounded-[2.5rem] shadow-2xl">
          <h2 className="text-white font-mono text-[10px] tracking-[0.4em] mb-8 uppercase flex items-center gap-3">
            <Terminal size={14} className="text-[#00FFAB]" /> SYS_PROBE_v2.0
          </h2>
          <form
            onSubmit={handleAudit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              required
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="enter-domain.com"
              className="flex-1 bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-[#00FFAB] font-mono outline-none focus:border-[#00FFAB]/50 transition-all"
            />
            <button className="bg-[#00FFAB] text-black font-black px-10 py-4 rounded-2xl uppercase text-[11px] tracking-[0.2em] hover:bg-white transition-all active:scale-95">
              Launch Diagnostic
            </button>
          </form>
        </div>
      </div>

      {/* 2. ENHANCED TERMINAL ANIMATION */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-12 bg-black border border-zinc-800 rounded-3xl p-8 font-mono text-[11px] leading-relaxed shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
              <div className="size-2 rounded-full bg-red-500/50" />
              <div className="size-2 rounded-full bg-yellow-500/50" />
              <div className="size-2 rounded-full bg-[#00FFAB]/50" />
              <span className="text-zinc-500 uppercase ml-2 tracking-tighter">
                THREAD_ACTIVE
              </span>
            </div>
            {LOADING_STEPS.slice(0, loadingStep + 1).map((step, i) => (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
                className="text-[#00FFAB] mb-2 flex items-center gap-4"
              >
                <span className="text-zinc-800">
                  [{new Date().toLocaleTimeString([], { hour12: false })}]
                </span>
                <span className="bg-[#00FFAB]/10 px-2 py-0.5 rounded text-[9px] font-bold">
                  READY
                </span>
                {step}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="inline-block size-2 bg-[#00FFAB] ml-2"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. FULL REPORT VIEW (Restored & Detailed) */}
      {results && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 space-y-12"
        >
          {/* Main Gauges Section */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 border-b border-white/5 pb-16">
            <ScoreGauge
              label="Performance"
              score={results.scores.performance}
            />
            <ScoreGauge label="SEO Matrix" score={results.scores.seo} />
            <ScoreGauge label="Access" score={results.scores.accessibility} />
            <ScoreGauge
              label="Stability"
              score={100 - parseFloat(results.metrics.cls) * 100}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Detail Column */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-3 mb-4">
                <BarChart3 size={14} className="text-[#00FFAB]" />{" "}
                Deep_Infrastructure_Scan
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <DetailCard
                  title="LCP (Largest Paint)"
                  val={results.metrics.lcp}
                  icon={<Clock size={14} />}
                />
                <DetailCard
                  title="TBT (Blocking Time)"
                  val={results.metrics.tbt}
                  icon={<AlertTriangle size={14} />}
                />
                <DetailCard
                  title="FCP (First Paint)"
                  val={results.metrics.fcp}
                  icon={<Zap size={14} />}
                />
                <DetailCard
                  title="Speed Index"
                  val={results.metrics.speedIndex}
                  icon={<Activity size={14} />}
                />
              </div>

              {/* Danger/Warning Card */}
              {results.scores.performance < 90 && (
                <div className="p-8 rounded-[2rem] bg-red-500/5 border border-red-500/10 flex gap-6 items-start">
                  <AlertTriangle
                    className="text-red-500 shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase italic">
                      Critical Slowdown Detected
                    </h4>
                    <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                      Your site is currently failing Google&apos;s Core Web
                      Vital assessment. This typically results in a{" "}
                      <span className="text-red-400">
                        15-20% drop in search visibility
                      </span>{" "}
                      and higher cost-per-click on ads.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Conversion & Diagnostics */}
            <div className="space-y-6">
              <div className="bg-[#00FFAB] p-8 rounded-[2.5rem] text-black shadow-[0_20px_50px_rgba(0,255,171,0.2)] h-fit sticky top-24">
                <h3 className="font-black text-xl italic leading-tight uppercase mb-4">
                  Bridge the Gap
                </h3>
                <p className="text-black/70 text-sm font-medium leading-relaxed mb-8">
                  We specialize in high-performance Next.js 16 migrations. We
                  can stabilize these metrics within 72 hours.
                </p>
                <button className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                  Deploy Fixes <ArrowRight size={14} />
                </button>
              </div>

              <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl space-y-4">
                <div className="flex justify-between text-[11px] font-mono border-b border-white/5 pb-3">
                  <span className="text-zinc-500 flex items-center gap-2 uppercase tracking-tighter">
                    <Database size={12} /> DOM Nodes
                  </span>
                  <span className="text-white">
                    {results.diagnostics.domSize}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-zinc-500 flex items-center gap-2 uppercase tracking-tighter">
                    <Server size={12} /> Request Count
                  </span>
                  <span className="text-white">
                    {results.diagnostics.networkRequests}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

/* HELPER COMPONENTS */
function ScoreGauge({ label, score }: { label: string; score: number }) {
  const color = score >= 90 ? "#00FFAB" : score >= 50 ? "#facc15" : "#ef4444";
  return (
    <div className="text-center group">
      <div className="size-28 rounded-full border-4 border-zinc-800 flex items-center justify-center relative mb-4 transition-transform group-hover:scale-110">
        <svg className="absolute inset-0 size-full -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="52"
            fill="transparent"
            stroke={color}
            strokeWidth="4"
            strokeDasharray="326"
            strokeDashoffset={326 - (326 * score) / 100}
            strokeLinecap="round"
          />
        </svg>
        <span className="text-2xl font-black text-white font-mono">
          {Math.round(score)}
        </span>
      </div>
      <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}

function DetailCard({
  title,
  val,
  icon,
}: {
  title: string;
  val: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest flex items-center gap-2">
          {icon} {title}
        </p>
        <p className="text-white font-mono font-bold">{val}</p>
      </div>
      {val.includes("s") && parseFloat(val) > 2.5 ? (
        <div className="size-1.5 rounded-full bg-red-500 animate-pulse" />
      ) : (
        <div className="size-1.5 rounded-full bg-[#00FFAB]" />
      )}
    </div>
  );
}
