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
      { title: "Hots & Colds — A Mbalwa Coffee Shop" },
      {
        name: "description",
        content:
          "Hots & Colds is a neighbourhood coffee shop in Mbalwa, Uganda. Freshly roasted espresso, iced coffees, smoothies, and bakes made daily.",
      },
      { property: "og:title", content: "Hots & Colds — A Mbalwa Coffee Shop" },
      {
        property: "og:description",
        content:
          "Sip bold. Stay cosy. Hots, colds and bites in the heart of Mbalwa.",
      },
    ],
  };
}
