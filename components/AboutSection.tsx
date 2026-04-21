import { Clock, MapPin, Phone } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f4ece3_0%,#efe1d3_100%)] py-20 text-espresso sm:py-32"
    >
      <div
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl animate-blob"
        aria-hidden
      />
      <div
        className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-amber-pop/20 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="inline-block rounded-full border border-espresso/10 bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-espresso/70">
            Brand philosophy
          </span>
          <h2 className="mt-5 font-display text-5xl font-black leading-[0.95] sm:text-7xl">
            A coffee house
            <br />
            shaped like a
            <br />
            <em className="text-terracotta">slow ritual.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-espresso/70">
            The Awwwards reference leans premium, minimal, and product-led. This interpretation keeps that spirit with quieter surfaces, stronger type, and a more curated café narrative.
          </p>
        </div>

        <div id="visit" className="space-y-5">
          {[
            {
              icon: MapPin,
              title: "Neighbourhood",
              lines: ["Mbalwa, Namugongo", "A local spot with premium presentation"],
            },
            {
              icon: Clock,
              title: "Daily rhythm",
              lines: ["Mon – Fri · 6:30am – 9:00pm", "Sat – Sun · 7:30am – 10:00pm"],
            },
            {
              icon: Phone,
              title: "Contact",
              lines: ["+254 700 123 456", "hello@hotsandcolds.cafe"],
            },
          ].map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="rounded-[1.8rem] border border-espresso/10 bg-white/70 p-6 shadow-[0_20px_45px_rgba(38,27,19,0.05)] backdrop-blur-sm transition-colors hover:border-terracotta/40"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-espresso p-3 text-cream">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="text-espresso/65">{l}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
