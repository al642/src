import { useEffect, useMemo, useRef, useState } from "react";
import { Search, Sparkles, X } from "lucide-react";
import { MENU, type MenuItem } from "../lib/menu";

export function OrderSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const suggestions = useMemo<MenuItem[]>(() => {
    if (!query.trim()) return MENU.slice(0, 6);
    const q = query.toLowerCase();
    return MENU.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.category.includes(q),
    ).slice(0, 8);
  }, [query]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="group relative inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-base font-semibold text-cream shadow-[0_8px_0_var(--terracotta)] transition-all hover:translate-y-1 hover:shadow-[0_4px_0_var(--terracotta)] sm:px-9 sm:py-5 sm:text-lg"
      >
        <Sparkles className="h-5 w-5 text-amber-pop" />
        What would you like to order?
        <span className="ml-1 rounded-full bg-amber-pop px-3 py-1 text-xs font-bold text-espresso">
          Try me
        </span>
      </button>
    );
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="relative rounded-3xl border-2 border-espresso bg-cream p-2 shadow-[0_10px_0_var(--terracotta)]">
        <div className="flex items-center gap-2 px-3 py-2">
          <Search className="h-5 w-5 shrink-0 text-espresso/70" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try 'latte', 'iced', 'mango'..."
            className="flex-1 bg-transparent text-base text-espresso placeholder:text-espresso/40 focus:outline-none sm:text-lg"
          />
          <button
            onClick={() => {
              setOpen(false);
              setQuery("");
            }}
            className="rounded-full p-1.5 text-espresso/60 transition-colors hover:bg-espresso/10 hover:text-espresso"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {suggestions.length > 0 ? (
          <ul className="mt-1 max-h-80 overflow-y-auto rounded-2xl bg-background/60 p-1">
            {suggestions.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setQuery(item.name)}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-amber-pop/30"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate font-display text-base font-bold text-espresso">
                        {item.name}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-terracotta">
                        {item.price}
                      </span>
                    </div>
                    <p className="truncate text-xs text-espresso/60">
                      {item.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-espresso/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-espresso/70">
                    {item.category}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl bg-background/60 p-6 text-center">
            <p className="font-display text-lg text-espresso">
              Hmm, we don't brew that yet ☕
            </p>
            <p className="text-sm text-espresso/60">
              But come visit us in Mbalwa — we'll figure something out.
            </p>
          </div>
        )}
      </div>
      <p className="mt-3 text-center text-xs text-espresso/50">
        Press ESC or × to close · Showing {suggestions.length} of {MENU.length}
      </p>
    </div>
  );
}
