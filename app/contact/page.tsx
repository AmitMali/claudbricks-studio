"use client";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Terminal,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-black relative overflow-hidden">
      {/* Background grid to match Homepage */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Brand & Info */}
        <div className="space-y-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase mb-6"
            >
              Initialize <br />
              <span className="text-[#00FFAB]">Connection_</span>
            </motion.h1>
            <p className="text-zinc-500 text-lg max-w-md">
              Ready to automate your workflow or dominate search rankings?
              Submit your project parameters below.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-900 rounded-xl border border-white/5 text-[#00FFAB]">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Direct Channel</h4>
                <p className="text-zinc-500 text-sm font-mono">
                  hello@claudbricks.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-900 rounded-xl border border-white/5 text-[#00FFAB]">
                <Terminal size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">System Status</h4>
                <p className="text-[#00FFAB] text-sm font-mono flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#00FFAB] animate-pulse" />
                  RECEPTION_ACTIVE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] relative"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
                  User_Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#00FFAB] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
                  Email_Address
                </label>
                <input
                  type="email"
                  placeholder="john@enterprise.com"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#00FFAB] outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
                Solution_Required
              </label>
              <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#00FFAB] outline-none transition-all appearance-none">
                <option>AI Automation</option>
                <option>Technical SEO Audit</option>
                <option>Software Engineering</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
                Message_Payload
              </label>
              <textarea
                rows={4}
                placeholder="Describe your project requirements..."
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#00FFAB] outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-[#00FFAB] text-black font-black py-5 rounded-2xl uppercase italic tracking-tighter flex items-center justify-center gap-2 hover:bg-white transition-all group">
              Send Message{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <div className="flex items-center justify-center gap-2 text-zinc-600 text-[10px] font-mono uppercase tracking-widest mt-4">
              <ShieldCheck size={12} /> Encrypted Submission Active
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
