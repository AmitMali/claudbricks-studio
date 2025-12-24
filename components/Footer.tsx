"use client";
import Link from "next/link";
import { Github, Twitter, Linkedin, Terminal, Cpu, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = "2025";
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#00FFAB] p-1.5 rounded-lg group-hover:rotate-90 transition-transform duration-500">
                <Cpu size={20} className="text-black" />
              </div>
              <span className="text-white font-black tracking-tighter text-xl uppercase italic">
                Claud<span className="text-[#00FFAB]">Bricks</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Architecting high-performance digital nodes and AI-driven
              automation for the next generation of enterprise.
            </p>
            <div className="flex items-center gap-4 text-zinc-500">
              <Link href="#" className="hover:text-[#00FFAB] transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="hover:text-[#00FFAB] transition-colors">
                <Github size={18} />
              </Link>
              <Link href="#" className="hover:text-[#00FFAB] transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Services_Archive
            </h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li>
                <Link
                  href="/services/ai-automation"
                  className="hover:text-white transition-colors"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="hover:text-white transition-colors"
                >
                  SEO Performance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="hover:text-white transition-colors"
                >
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-design"
                  className="hover:text-white transition-colors"
                >
                  Infrastructure Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Company_Node
            </h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition-colors"
                >
                  Success Logs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy protocol
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#00FFAB] transition-colors font-bold text-[#00FFAB]"
                >
                  Hire the Agency
                </Link>
              </li>
            </ul>
          </div>

          {/* Status Column */}
          <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5 h-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-2 rounded-full bg-[#00FFAB] animate-pulse" />
              <span className="text-[10px] text-[#00FFAB] font-mono uppercase tracking-widest">
                Systems_Operational
              </span>
            </div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-tighter leading-tight">
              Global Infrastructure Network v4.0.2 active across 12 nodes.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest"
            suppressHydrationWarning
          >
            © {currentYear} ClaudBricks. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Globe size={12} /> Global_Access
            </span>
            <span className="flex items-center gap-2">
              <Terminal size={12} /> Encrypted_Session
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
