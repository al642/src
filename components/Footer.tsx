export function Footer() {
  return (
    <footer className="bg-cream py-10 text-espresso">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p className="font-display text-2xl font-black">
          Hots <span className="text-terracotta">&</span> Colds
        </p>
        <p className="text-sm text-espresso/60">
          © {new Date().getFullYear()} Hots & Colds Café · Mbalwa, Uganda
        </p>
      </div>
    </footer>
  );
}
