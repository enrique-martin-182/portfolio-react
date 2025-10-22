import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/65 bg-zinc-950/85 border-b border-zinc-900">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-base sm:text-lg font-semibold tracking-tight hover:opacity-90 transition">
          Enrique Martín
        </a>
        <div className="flex items-center gap-2">
          <a className="text-sm opacity-80 hover:opacity-100 px-2 py-1" href="#projects">Proyectos</a>
          <a className="text-sm opacity-80 hover:opacity-100 px-2 py-1" href="#contact">Contacto</a>
          <a
            href="/cv.pdf"
            className="text-sm rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 hover:bg-sky-500/20 transition"
          >
            Descargar CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
