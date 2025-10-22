import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-3 py-1.5 text-sm hover:border-zinc-700 hover:shadow-glow transition"
      aria-label="Cambiar tema"
    >
      {dark ? <Sun size={16}/> : <Moon size={16}/>}
      <span className="hidden sm:inline">{dark ? 'Claro' : 'Oscuro'}</span>
    </button>
  );
}
