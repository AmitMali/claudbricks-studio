"use client";
import { AuditResults } from "@/types/audit";
import * as Tabs from "@radix-ui/react-tabs"; // Radix for clean navigation
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"; // Recharts for data power
import {
  Zap,
  Search,
  Globe,
  AlertTriangle,
  ArrowRight,
  Activity,
  ShieldCheck,
} from "lucide-react";

export default function AuditReport({ data }: { data: AuditResults }) {
  // Chart Data: Comparing current site to a ClaudBricks optimized site
  const chartData = [
    { name: "Current", score: data.scores.performance, fill: "#ef4444" },
    { name: "ClaudBricks", score: 98, fill: "#00FFAB" },
  ];

  return (
    <div className="mt-12 space-y-10">
      <Tabs.Root defaultValue="overview" className="flex flex-col">
        {/* TAB NAVIGATION (Radix UI) */}
        <Tabs.List className="flex gap-8 border-b border-white/5 mb-8 font-mono text-[10px] uppercase tracking-[0.2em]">
          <Tabs.Trigger
            value="overview"
            className="pb-4 data-[state=active]:text-[#00FFAB] data-[state=active]:border-b-2 border-[#00FFAB] transition-all"
          >
            01_Overview
          </Tabs.Trigger>
          <Tabs.Trigger
            value="details"
            className="pb-4 data-[state=active]:text-[#00FFAB] data-[state=active]:border-b-2 border-[#00FFAB] transition-all"
          >
            02_Technical_Vitals
          </Tabs.Trigger>
        </Tabs.List>

        {/* OVERVIEW TAB: Using Recharts */}
        <Tabs.Content value="overview" className="outline-none">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-[300px] w-full bg-zinc-900/30 p-6 rounded-[2rem] border border-white/5">
              <h4 className="text-zinc-500 text-[10px] uppercase font-bold mb-6 tracking-widest">
                Growth_Potential_Analysis
              </h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#27272a"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#71717a"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      backgroundColor: "#18181b",
                      border: "1px solid #27272a",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]} barSize={60}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-6">
              <h3 className="text-white text-2xl font-black italic uppercase leading-tight">
                Your performance is{" "}
                <span className="text-red-500">Bleeding</span> Revenue.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The chart shows the gap between your current infrastructure and
                a<span className="text-white"> ClaudBricks Optimized Node</span>
                . Closing this {98 - data.scores.performance}% gap typically
                results in a 20% increase in lead conversion.
              </p>
              <button className="bg-[#00FFAB] text-black px-8 py-4 rounded-2xl font-bold uppercase text-[11px] tracking-widest flex items-center gap-3 hover:scale-105 transition-transform">
                Bridge The Gap <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </Tabs.Content>

        {/* DETAILS TAB: Deep Metrics */}
        <Tabs.Content value="details" className="outline-none space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <MetricBox title="LCP" value={data.metrics.lcp} label="Speed" />
            <MetricBox
              title="TBT"
              value={data.metrics.tbt}
              label="Responsiveness"
            />
            <MetricBox
              title="CLS"
              value={data.metrics.cls}
              label="Visual Stability"
            />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

function MetricBox({
  title,
  value,
  label,
}: {
  title: string;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
          {title}
        </span>
        <Activity size={12} className="text-[#00FFAB]" />
      </div>
      <div className="text-xl font-black text-white font-mono">{value}</div>
      <div className="text-[9px] text-zinc-600 uppercase font-bold mt-1">
        {label}
      </div>
    </div>
  );
}
