import heroImg from "../assets/hero-coffee.jpg";
import { OrderSearch } from "./OrderSearch";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-16 pt-6 sm:pb-24">
      {/* Top nav */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className="font-display text-2xl font-black text-espresso sm:text-3xl">
          Hots <span className="text-terracotta">&</span> Colds
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-espresso md:flex">
          <a href="#menu" className="hover:text-terracotta">Menu</a>
          <a href="#visit" className="hover:text-terracotta">Visit</a>
          <a
            href="#visit"
            className="rounded-full bg-espresso px-4 py-2 text-cream transition-colors hover:bg-terracotta"
          >
            Mbalwa, Uganda
          </a>
        </div>
        <a
          href="#visit"
          className="rounded-full bg-espresso px-3 py-1.5 text-xs font-semibold text-cream md:hidden"
        >
          Mbalwa
        </a>
      </nav>

      <div className="relative mx-auto max-w-6xl px-5 pt-6 sm:pt-12">
        {/* Decorative blobs */}
        <div
          className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-amber-pop/50 blur-3xl animate-blob"
          aria-hidden
        />
        <div
          className="absolute -right-10 top-40 h-72 w-72 rounded-full bg-terracotta/30 blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
          aria-hidden
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-espresso bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-espresso">
              <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
              Open now in Mbalwa
            </div>

            <h1 className="font-display text-[3.25rem] font-black leading-[0.9] text-espresso text-balance sm:text-7xl lg:text-[6rem]">
              Sip <em className="text-terracotta">bold.</em>
              <br />
              Stay <span className="relative inline-block">
                <span className="relative z-10">cosy.</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-amber-pop sm:h-5" aria-hidden />
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-espresso/75 sm:text-xl">
              A neighbourhood café in <strong>Mbalwa</strong> brewing seriously good coffee — hot, cold, and everything in between.
            </p>

            <div className="mt-8">
              <OrderSearch />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-espresso/70">
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">Loved by locals</span>
              </div>
              <div className="h-4 w-px bg-espresso/20" />
              <div className="font-semibold">26+ items on the menu</div>
            </div>
          </div>

          {/* Image card */}
          <div className="relative">
            <div className="absolute -inset-3 -rotate-2 rounded-[2.5rem] bg-terracotta/80" aria-hidden />
            <div className="relative overflow-hidden rounded-[2.25rem] border-4 border-espresso shadow-[0_15px_0_var(--espresso)]">
              <img
                src={heroImg}
                alt="A steaming latte and an iced coffee with caramel drizzle, surrounded by coffee beans and croissants"
                width={1536}
                height={1536}
                className="aspect-square w-full object-cover sm:aspect-[4/5]"
              />
              {/* Floating sticker */}
              <div className="absolute -bottom-3 -right-3 rotate-6 rounded-2xl border-2 border-espresso bg-amber-pop px-4 py-2 font-display text-base font-black text-espresso shadow-[0_4px_0_var(--espresso)] sm:bottom-6 sm:right-6 sm:rotate-12">
                ☕ Brewed daily
              </div>
              <div className="absolute -left-3 top-6 -rotate-6 rounded-2xl border-2 border-espresso bg-mint px-3 py-1.5 font-display text-sm font-black text-espresso shadow-[0_4px_0_var(--espresso)] sm:left-auto sm:right-6 sm:top-auto sm:bottom-24 sm:rotate-3">
                Iced ❄️ Hot 🔥
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
