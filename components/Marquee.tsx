const WORDS = [
  "Freshly roasted",
  "Mbalwa local",
  "Hots & Colds",
  "Open daily",
  "Beans from Uganda",
  "Made with love",
];

export function Marquee() {
  const items = [...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y-2 border-espresso bg-espresso py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl font-black uppercase tracking-tight text-cream sm:text-3xl"
          >
            {w}
            <span className="text-amber-pop">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
