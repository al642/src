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
    <div className="relative">
      <div className="relative mb-6 overflow-hidden rounded-3xl border-2 border-espresso shadow-[0_10px_0_var(--espresso)]">
        <img
          src={image}
          alt={title}
          width={1024}
          height={1280}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
        <div
          className={`absolute left-4 top-4 rounded-full px-4 py-1.5 font-display text-sm font-black uppercase tracking-wider ${accent === "amber" ? "bg-amber-pop text-espresso" : "bg-mint text-espresso"}`}
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
            className="group flex items-baseline gap-3 border-b border-dashed border-espresso/30 pb-3"
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
    <section id="menu" className="relative bg-cream py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-espresso px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cream">
            The Menu
          </span>
          <h2 className="mt-5 font-display text-5xl font-black text-espresso sm:text-7xl">
            Pick your <em className="text-terracotta">temperature</em>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-espresso/70">
            Everything we make starts with beans roasted right here in Kenya. Pair it with something fresh from our kitchen.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <MenuColumn
            title="Hots."
            subtitle="Warm you up"
            items={hots}
            image={hotsImg}
            accent="amber"
          />
          <MenuColumn
            title="Colds."
            subtitle="Cool you down"
            items={colds}
            image={coldsImg}
            accent="mint"
          />
        </div>

        <div className="mt-20 rounded-3xl border-2 border-espresso bg-amber-pop/40 p-8 sm:p-12">
          <h3 className="font-display text-4xl font-black text-espresso sm:text-5xl">
            Bites & Bakes 🥐
          </h3>
          <p className="mt-2 text-espresso/70">Baked fresh every morning.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {food.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border-2 border-espresso bg-cream p-4 transition-transform hover:-translate-y-1"
              >
                <div className="mb-1 text-3xl">{item.emoji}</div>
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-display text-lg font-bold text-espresso">
                    {item.name}
                  </h4>
                  <span className="text-sm font-semibold text-terracotta">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-espresso/65">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
