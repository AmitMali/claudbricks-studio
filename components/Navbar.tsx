"use client";
import { useState } from "react";
import Link from "next/link";
import { Cpu, ChevronDown, Menu, X } from "lucide-react";

const solutions = [
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "SEO Services", href: "/services/seo" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#00FFAB] p-1.5 rounded-lg">
            <Cpu size={20} className="text-black" />
          </div>
          <span className="text-white font-black tracking-tighter text-xl uppercase italic">
            Claud<span className="text-[#00FFAB]">Bricks</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-zinc-400 group-hover:text-white text-sm font-medium transition-colors">
              Solutions{" "}
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform"
              />
            </button>

            <div className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl">
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-zinc-400 hover:text-[#00FFAB] hover:bg-white/5 rounded-xl text-sm transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            About
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#00FFAB] transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/5 p-6 space-y-4">
          {solutions.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-zinc-400 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-white/5" />
          <Link href="/contact" className="block text-[#00FFAB] font-bold">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
