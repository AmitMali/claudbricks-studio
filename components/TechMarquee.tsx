"use client";
import { motion } from "framer-motion";

const tech = [
  "Git",
  "GitHub",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Docker",
  "AWS",
  "PostgreSQL",
  "CI/CD",
  "Redis",
  "GraphQL",
  "Kubernetes",
];

export default function TechMarquee() {
  return (
    <div className="relative py-20 overflow-hidden bg-zinc-950">
      {/* Faded Edges for Depth */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

      <div className="flex select-none overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {/* Double the array to create the infinite loop effect */}
          {[...tech, ...tech].map((item, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-bold text-zinc-800 hover:text-[#00FFAB] transition-colors duration-500 cursor-default tracking-tighter"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blueprint Line */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* Technical Metadata Footer for the Section */}
        <div className="mt-4 flex items-center gap-4 text-[10px] font-mono text-zinc-500">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>BRANCH: MAIN</span>
          </div>
          <span>COMMIT: 7f3a9e2</span>
          <span className="text-[#00FFAB]">STAGING: PASSED</span>
        </div>
      </div>
    </div>
  );
}
