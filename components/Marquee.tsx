const WORDS = [
  "Freshly roasted beans",
  "Quiet luxury coffee",
  "Mbalwa neighbourhood house",
  "Seasonal drinks",
  "Slow baked pastries",
  "Open every day",
];

export function Marquee() {
  const items = [...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-espresso/10 bg-[#f2e7dc] py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl font-black uppercase tracking-tight text-espresso sm:text-3xl"
          >
            {w}
            <span className="text-terracotta">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
