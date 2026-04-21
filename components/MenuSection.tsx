import coldsImg from "../assets/colds-section.jpg";
import hotsImg from "../assets/hots-section.jpg";
import { MENU } from "../lib/menu";

function MenuColumn({
  title,
  subtitle,
  items,
  image,
  accent,
}: {
  title: string;
  subtitle: string;
  items: typeof MENU;
  image: string;
  accent: "amber" | "mint";
}) {
  return (
    <div className="relative rounded-[2rem] border border-espresso/10 bg-white/70 p-5 shadow-[0_24px_60px_rgba(38,27,19,0.06)] backdrop-blur-sm sm:p-6">
      <div className="relative mb-6 overflow-hidden rounded-[1.6rem] border border-espresso/10">
        <img
          src={image}
          alt={title}
          width={1024}
          height={1280}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
        <div
          className={`absolute left-4 top-4 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] ${accent === "amber" ? "bg-amber-pop text-espresso" : "bg-mint text-espresso"}`}
        >
          {subtitle}
        </div>
      </div>
      <h3 className="mb-6 font-display text-5xl font-black text-espresso sm:text-6xl">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="group flex items-baseline gap-3 border-b border-dashed border-espresso/20 pb-3"
          >
            <span className="text-2xl">{item.emoji}</span>
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="font-display text-xl font-bold text-espresso">
                  {item.name}
                </h4>
                <span className="font-sans font-semibold text-terracotta">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-espresso/65">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MenuSection() {
  const hots = MENU.filter((m) => m.category === "hot");
  const colds = MENU.filter((m) => m.category === "cold");
  const food = MENU.filter((m) => m.category === "food");

  return (
    <section id="menu" className="relative bg-[#fbf6f1] py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-block rounded-full border border-espresso/15 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-espresso/70">
              Curated menu
            </span>
            <h2 className="mt-5 font-display text-5xl font-black text-espresso sm:text-7xl">
              Roasted, shaken,
              <br />
              poured to order.
            </h2>
          </div>
          <div className="lg:pl-16">
            <p className="max-w-2xl text-lg leading-8 text-espresso/70">
              Inspired by premium roastery shops, the menu is split into warm signatures, chilled favourites, and a shorter list of bakes that feel worth arriving early for.
            </p>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <MenuColumn
            title="Hot pours"
            subtitle="Warm and deep"
            items={hots}
            image={hotsImg}
            accent="amber"
          />
          <MenuColumn
            title="Cold pours"
            subtitle="Bright and cool"
            items={colds}
            image={coldsImg}
            accent="mint"
          />
        </div>

        <div className="mt-20 grid gap-8 rounded-[2rem] border border-espresso/10 bg-[#261b13] p-8 text-cream shadow-[0_32px_80px_rgba(38,27,19,0.18)] sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="inline-block rounded-full bg-amber-pop px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-espresso">
              Bakery counter
            </span>
            <h3 className="mt-5 font-display text-4xl font-black sm:text-5xl">
              Bites that belong beside a good cup.
            </h3>
            <p className="mt-3 max-w-md text-cream/70">
              Buttery, flaky, lightly sweet, and made to complement the coffee rather than compete with it.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {food.map((item) => (
              <li
                key={item.name}
                className="rounded-[1.5rem] border border-cream/10 bg-white/5 p-5 backdrop-blur-sm transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 text-3xl">{item.emoji}</div>
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-display text-lg font-bold text-cream">
                    {item.name}
                  </h4>
                  <span className="text-sm font-semibold text-amber-pop">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-cream/65">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
