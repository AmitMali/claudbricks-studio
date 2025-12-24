"use client";
import { useState } from "react"; // Added for state management
import { motion } from "framer-motion";
import {
  Mail,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  // 1. Manage form states
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      solution: formData.get("solution"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Connection_Timeout");

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage("System_Overload: Please try again later.");
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-black relative overflow-hidden">
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
        <motion.div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-[2.5rem]">
          {status === "success" ? (
            // Success Message State
            <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
              <div className="p-4 bg-[#00FFAB]/10 rounded-full text-[#00FFAB]">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                Transmission_Received
              </h2>
              <p className="text-zinc-500 max-w-xs">
                Our engineering team has received your payload. Expect a
                response within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[#00FFAB] text-xs font-mono uppercase tracking-[0.2em] hover:underline"
              >
                Send_New_Message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
                    User_Name
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#00FFAB] outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
                    Email_Address
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@enterprise.com"
                    className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#00FFAB] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
                  Solution_Required
                </label>
                <select
                  name="solution"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#00FFAB] outline-none appearance-none"
                >
                  <option value="Web_Development">
                    Web Development Inquiry
                  </option>
                  <option value="ai_automation">AI Automation</option>
                  <option value="seo_audit">Technical SEO Audit</option>
                  <option value="software_eng">Software Engineering</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
                  Message_Payload
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe requirements..."
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#00FFAB] outline-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-[10px] font-mono uppercase text-center">
                  {errorMessage}
                </p>
              )}

              <button
                disabled={status === "loading"}
                className="w-full bg-[#00FFAB] disabled:bg-zinc-800 disabled:text-zinc-600 text-black font-black py-5 rounded-2xl uppercase italic tracking-tighter flex items-center justify-center gap-2 hover:bg-white transition-all group"
              >
                {status === "loading" ? (
                  <>
                    Processing_Data{" "}
                    <Loader2 className="animate-spin" size={20} />
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
