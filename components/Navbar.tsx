"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown, Monitor, Zap, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const solutions = [
    { name: "Technical SEO", icon: <Search size={16} />, href: "#" },
    { name: "Core Web Vitals", icon: <Zap size={16} />, href: "#" },
    { name: "Architecture", icon: <Monitor size={16} />, href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-5 py-3 rounded-full border border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl shadow-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-[110]">
            <motion.div
              whileHover={{ rotate: 180 }}
              className="h-6 w-6 bg-[#00FFAB] rounded-md shadow-[0_0_15px_rgba(0,255,171,0.4)]"
            />
            <span className="font-display font-bold text-lg tracking-tight text-white">
              claudbricks<span className="text-[#00FFAB]">.</span>studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {/* Solutions Dropdown */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveSubmenu("solutions")}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button className="flex items-center gap-1 group-hover:text-[#00FFAB] transition-colors">
                Solutions{" "}
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>

              <AnimatePresence>
                {activeSubmenu === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-4 w-56 p-2 rounded-2xl border border-zinc-800 bg-zinc-950 shadow-3xl"
                  >
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 text-zinc-400 hover:text-[#00FFAB] transition-all"
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#engineering"
              className="hover:text-[#00FFAB] transition-colors"
            >
              Engineering
            </Link>
            <Link
              href="#approach"
              className="hover:text-[#00FFAB] transition-colors"
            >
              Approach
            </Link>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block bg-white text-black text-xs font-bold px-5 py-2 rounded-full hover:bg-[#00FFAB] transition-all active:scale-95">
              Book a Call
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white z-[110]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-4 right-4 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl md:hidden shadow-3xl"
          >
            <div className="p-6 flex flex-col gap-5">
              <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                Menu
              </div>
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-4 text-lg font-medium text-zinc-300 hover:text-[#00FFAB]"
                >
                  <span className="p-2 bg-zinc-900 rounded-lg text-[#00FFAB]">
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              ))}
              <hr className="border-zinc-800" />
              <button className="w-full bg-[#00FFAB] text-black font-bold py-4 rounded-2xl active:scale-95 transition-transform">
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
