"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Monitor,
  Zap,
  Search,
  BarChart3,
  Globe,
  Code2,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // 1. Dynamic Link Configuration
  const menuConfig = {
    solutions: [
      {
        name: "Technical SEO",
        icon: <Search size={16} />,
        href: "/services/seo",
      },
      {
        name: "Core Web Vitals",
        icon: <Zap size={16} />,
        href: "/services/performance",
      },
      {
        name: "Architecture",
        icon: <Monitor size={16} />,
        href: "/services/architecture",
      },
    ],
    tools: [
      {
        name: "Audit Engine",
        icon: <BarChart3 size={16} />,
        href: "/tools/audit",
      },
      {
        name: "Global Pings",
        icon: <Globe size={16} />,
        href: "/#infrastructure",
      },
      { name: "Component Lab", icon: <Code2 size={16} />, href: "/#lab" },
    ],
  };

  const navLinks = [
    {
      name: "Solutions",
      type: "dropdown",
      id: "solutions",
      items: menuConfig.solutions,
    },
    { name: "Tools", type: "dropdown", id: "tools", items: menuConfig.tools },
    { name: "Engineering", type: "link", href: "/#engineering" },
    { name: "Approach", type: "link", href: "/#approach" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-5 py-3 rounded-full border border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl shadow-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              className="h-6 w-6 bg-[#00FFAB] rounded-md shadow-[0_0_15px_rgba(0,255,171,0.4)]"
            />
            <span className="font-display font-bold text-lg tracking-tight text-white">
              claudbricks<span className="text-[#00FFAB]">.</span>studio
            </span>
          </Link>

          {/* Desktop Dynamic Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group cursor-pointer"
                onMouseEnter={() =>
                  link.type === "dropdown" && setActiveSubmenu(link.id || null)
                }
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {link.type === "dropdown" ? (
                  <button className="flex items-center gap-1 group-hover:text-[#00FFAB] transition-colors py-2">
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeSubmenu === link.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="hover:text-[#00FFAB] transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.type === "dropdown" && activeSubmenu === link.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-4 w-56 p-2 rounded-2xl border border-zinc-800 bg-zinc-950 shadow-3xl"
                    >
                      {link.items?.map((item) => (
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
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block bg-white text-black text-xs font-bold px-5 py-2 rounded-full hover:bg-[#00FFAB] transition-all active:scale-95">
              Book a Call
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-zinc-400 z-50"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 p-6 rounded-3xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl md:hidden shadow-3xl z-40"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-3">
                    {link.name}
                  </div>
                  {link.type === "dropdown" ? (
                    <div className="flex flex-col gap-3">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 text-lg font-medium text-zinc-300"
                        >
                          <span className="text-[#00FFAB]">{item.icon}</span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-zinc-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <hr className="border-zinc-800" />
              <button className="w-full bg-[#00FFAB] text-black font-bold py-4 rounded-2xl">
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
