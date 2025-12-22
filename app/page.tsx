import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TechMarquee from "@/components/TechMarquee";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <ServicesGrid />
      <TechMarquee />
    </main>
  );
}
