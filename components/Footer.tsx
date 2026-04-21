export function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-cream py-10 text-espresso">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p className="font-display text-2xl font-black">
          Hots <span className="text-terracotta">&</span> Colds
        </p>
        <p className="text-center text-sm uppercase tracking-[0.16em] text-espresso/50 sm:text-right">
          © {new Date().getFullYear()} Hots & Colds Café · Mbalwa, Uganda
        </p>
      </div>
    </footer>
  );
}
