import heroImg from "../assets/hero-coffee.jpg";
import { OrderSearch } from "./OrderSearch";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream px-5 pb-16 pt-6 sm:pb-24">
      <div
        className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,oklch(0.91_0.03_85),transparent_65%)]"
        aria-hidden
      />
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between border-b border-espresso/10 py-5">
        <a href="#" className="font-display text-2xl font-black text-espresso sm:text-3xl">
          Hots <span className="text-terracotta">&</span> Colds
        </a>
        <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.22em] text-espresso/70 md:flex">
          <a href="#menu" className="transition-colors hover:text-terracotta">Menu</a>
          <a href="#philosophy" className="transition-colors hover:text-terracotta">Story</a>
          <a href="#visit" className="transition-colors hover:text-terracotta">Visit</a>
          <a
            href="#visit"
            className="rounded-full border border-espresso bg-espresso px-4 py-2 text-[11px] text-cream transition-colors hover:bg-terracotta hover:border-terracotta"
          >
            Brewed in Mbalwa
          </a>
        </div>
        <a
          href="#visit"
          className="rounded-full border border-espresso bg-espresso px-3 py-1.5 text-xs font-semibold text-cream md:hidden"
        >
          Mbalwa
        </a>
      </nav>

      <div className="relative mx-auto max-w-6xl pt-8 sm:pt-14">
        <div
          className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-amber-pop/30 blur-3xl animate-blob"
          aria-hidden
        />
        <div
          className="absolute -right-10 top-40 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
          aria-hidden
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-espresso/20 bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-espresso/70 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-mint" />
              Small batch coffee and bakes
            </div>

            <p className="max-w-xl text-sm uppercase tracking-[0.24em] text-espresso/55">
              Freshly roasted for slow mornings, long conversations, and the kind of afternoons that deserve a second cup.
            </p>

            <h1 className="mt-4 max-w-4xl font-display text-[3.25rem] font-black leading-[0.88] text-espresso text-balance sm:text-7xl lg:text-[6.2rem]">
              Fresh coffee
              <br />
              with a softer
              <br />
              rhythm.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-espresso/75 sm:text-xl">
              Hots &amp; Colds is a neighbourhood coffee house in <strong>Mbalwa</strong> with an editorial, premium feel: roasted beans, chilled signatures, and warm pastries served all day.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <OrderSearch />
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-espresso px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-espresso hover:text-cream sm:px-8"
              >
                Explore the menu
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl gap-4 border-t border-espresso/10 pt-6 text-sm text-espresso/70 sm:grid-cols-3">
              <div>
                <p className="font-display text-3xl font-black text-espresso">26</p>
                <p className="mt-1 uppercase tracking-[0.16em]">Signature items</p>
              </div>
              <div>
                <p className="font-display text-3xl font-black text-espresso">Daily</p>
                <p className="mt-1 uppercase tracking-[0.16em]">Roasted and baked</p>
              </div>
              <div>
                <p className="font-display text-3xl font-black text-espresso">Local</p>
                <p className="mt-1 uppercase tracking-[0.16em]">Mbalwa favourite</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.8rem] border border-espresso/10 bg-white/50 backdrop-blur-sm" aria-hidden />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-espresso/15 bg-[#f7efe6] shadow-[0_30px_80px_rgba(38,27,19,0.12)]">
              <img
                src={heroImg}
                alt="A steaming latte and an iced coffee with caramel drizzle, surrounded by coffee beans and croissants"
                width={1536}
                height={1536}
                className="aspect-square w-full object-cover sm:aspect-[4/5]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#261b13]/80 via-[#261b13]/15 to-transparent p-6 text-cream sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-cream/70">
                  Featured roast
                </p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-3xl font-black">House Espresso</p>
                    <p className="mt-1 max-w-xs text-sm text-cream/80">
                      Chocolate body, citrus lift, smooth caramel finish.
                    </p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-pop">
                    Since 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-2 rounded-[1.75rem] border border-espresso/15 bg-white/90 px-5 py-4 shadow-[0_20px_50px_rgba(38,27,19,0.08)] backdrop-blur-sm sm:left-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-espresso/55">Best for</p>
              <p className="mt-1 font-display text-2xl font-black text-espresso">Morning rituals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
