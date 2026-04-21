import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { MenuSection } from "../components/MenuSection";

export function IndexPage() {
  return (
    <main className="bg-cream bg-grain">
      <Hero />
      <Marquee />
      <MenuSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

export function getIndexHead() {
  return {
    meta: [
      { title: "Hots & Colds — Premium Coffee House in Mbalwa" },
      {
        name: "description",
        content:
          "Hots & Colds is a premium-feeling neighbourhood coffee house in Mbalwa, Uganda. Freshly roasted espresso, chilled signatures, and bakes made daily.",
      },
      { property: "og:title", content: "Hots & Colds — Premium Coffee House in Mbalwa" },
      {
        property: "og:description",
        content:
          "Editorial café mood, roasted coffee, chilled pours, and warm bakes in the heart of Mbalwa.",
      },
    ],
  };
}
