import React, { useEffect, useState } from "react";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import { Sun, Moon, Mail, FileDown } from "lucide-react";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const EMAIL = "enriquemartinpuya@gmail.com"; 
const LINKEDIN = "https://www.linkedin.com/in/enrique-mart%C3%ADn-puya-a7454318b/";
const GITHUB = "https://github.com/enrique-martin-182";
const CV_URL = "/cv.pdf"; // colocar CV como public/cv.pdf
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default function App() {
  const [dark, setDark] = useState(false);

  // Inicializa el tema
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Fondo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 animate-gradient bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.20),rgba(0,0,0,0))]"
      />

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/40 border-b border-zinc-200/60 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-tight">
            Enrique Martín · Portfolio
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="opacity-80 hover:opacity-100">Proyectos</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/70 dark:border-zinc-800 px-3 py-2 text-xs font-medium hover:bg-zinc-50/70 dark:hover:bg-zinc-900/70"
              aria-label="Enviar email"
              title={EMAIL}
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-2 hover:bg-zinc-50/70 dark:hover:bg-zinc-900/70"
              aria-label="Cambiar tema"
              title="Cambiar tema"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Front-End · QA Automation
        </p>

        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient">
            Interfaces limpias, accesibles y fiables
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base md:text-lg text-zinc-600 dark:text-zinc-300">
          Desarrollo con React y buenas prácticas de TypeScript/JavaScript. Automatizo
          pruebas end-to-end con Playwright para asegurar calidad desde el día uno.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Ver proyectos
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/70 dark:border-zinc-800 px-5 py-2.5 text-sm font-medium hover:bg-zinc-50/70 dark:hover:bg-zinc-900/70"
          >
            <FileDown className="h-4 w-4" />
            Descargar CV
          </a>
        </div>
      </section>

      {/* Proyectos */}
      <ProjectsSection />

      {/* Contacto */}
      <section id="contact" className="border-t border-zinc-200/60 dark:border-zinc-800 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold tracking-tight">Contacto</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Abierto a oportunidades 100% remoto. Respondo rápido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group rounded-2xl p-px bg-gradient-to-r from-indigo-500/70 via-sky-500/70 to-fuchsia-500/70 hover:from-indigo-500 hover:via-sky-500 hover:to-fuchsia-500 transition"
            >
              <div className="rounded-2xl h-full w-full bg-white dark:bg-zinc-950 p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">Email</p>
                  <p className="mt-1 font-medium">{EMAIL}</p>
                </div>
                <Mail className="h-5 w-5 opacity-70 group-hover:opacity-100" />
              </div>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-px bg-gradient-to-r from-indigo-500/70 via-sky-500/70 to-fuchsia-500/70 hover:from-indigo-500 hover:via-sky-500 hover:to-fuchsia-500 transition"
            >
              <div className="rounded-2xl h-full w-full bg-white dark:bg-zinc-950 p-5">
                <p className="text-xs uppercase tracking-wider text-zinc-500">LinkedIn</p>
                <p className="mt-1 font-medium break-all">Perfil</p>
              </div>
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-px bg-gradient-to-r from-indigo-500/70 via-sky-500/70 to-fuchsia-500/70 hover:from-indigo-500 hover:via-sky-500 hover:to-fuchsia-500 transition"
            >
              <div className="rounded-2xl h-full w-full bg-white dark:bg-zinc-950 p-5">
                <p className="text-xs uppercase tracking-wider text-zinc-500">GitHub</p>
                <p className="mt-1 font-medium break-all">{GITHUB}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Enrique Martín · Hecho con React + Tailwind
      </footer>
    </div>
  );
}
