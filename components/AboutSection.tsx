import { Clock, MapPin, Phone } from "lucide-react";

export function AboutSection() {
  return (
    <section id="visit" className="relative overflow-hidden bg-espresso py-20 text-cream sm:py-32">
      <div
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-terracotta/40 blur-3xl animate-blob"
        aria-hidden
      />
      <div
        className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-amber-pop/30 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-block rounded-full bg-amber-pop px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-espresso">
            Visit us
          </span>
          <h2 className="mt-5 font-display text-5xl font-black leading-[0.95] sm:text-7xl">
            Tucked into <br />
            the heart of <br />
            <em className="text-amber-pop">Mbalwa.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg text-cream/80">
            We're a small neighbourhood café with big love for coffee. Whether you're rushing to work, meeting a friend, or just hiding from the rain — pull up a chair. The kettle's on.
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              icon: MapPin,
              title: "Find us",
              lines: ["Mbalwa, Namugongo", "Next to the old fig tree"],
            },
            {
              icon: Clock,
              title: "Opening hours",
              lines: ["Mon – Fri · 6:30am – 9:00pm", "Sat – Sun · 7:30am – 10:00pm"],
            },
            {
              icon: Phone,
              title: "Say hi",
              lines: ["+254 700 123 456", "hello@hotsandcolds.cafe"],
            },
          ].map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="rounded-3xl border-2 border-cream/20 bg-cream/5 p-6 backdrop-blur-sm transition-colors hover:border-amber-pop/60"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-amber-pop p-3 text-espresso">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="text-cream/75">{l}</p>
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
