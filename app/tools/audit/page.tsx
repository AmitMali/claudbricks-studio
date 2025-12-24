import Navbar from "@/components/Navbar";
import AuditTool from "@/components/AuditTool";

export const metadata = {
  title: "Website Performance Audit | ClaudBricks Tools",
  description:
    "Analyze your infrastructure performance with our professional engineering audit tool.",
};

export default function AuditPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      {/* Adding a spacer for the fixed navbar */}
      <div className="pt-24">
        <AuditTool />
      </div>

      {/* Future Tool Placeholder */}
      <div className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
          More Engineering Tools Coming Soon...
        </p>
      </div>
    </main>
  );
}
