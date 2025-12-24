export default function TechLab() {
  const categories = [
    {
      title: "Frontend Engines",
      tools: ["React", "Vue", "Svelte", "Next.js", "Tailwind"],
      description: "High-fidelity, performant user interfaces.",
    },
    {
      title: "Core Systems",
      tools: ["Node.js", "Python", "Go", "Rust", "PostgreSQL"],
      description: "Scalable backends and data architecture.",
    },
    {
      title: "Cloud & Edge",
      tools: ["Vercel", "AWS", "Docker", "Cloudinary", "Git"],
      description: "Global distribution and CI/CD pipelines.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#00FFAB] font-mono text-xs tracking-[0.3em] uppercase">
            The Stack
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 tracking-tighter">
            Engineering Lab
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 group-hover:border-[#00FFAB]/30 group-hover:text-white transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
