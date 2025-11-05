import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "QueLoKhé — Pokémon Community",
    href: "https://quelokhe.vercel.app/",
    description:
      "Web comunitaria de Pokémon con reproductor de música, minijuegos y enlaces a la comunidad (Discord).",
    tags: ["React", "Tailwind", "Audio Player"],
  },
  {
    title: "QA Control Room",
    href: "https://github.com/enrique-martin-182/qa-control-room",
    description:
      "Panel para orquestar pruebas E2E: ejecución, reporting y métricas de estabilidad.",
    tags: ["React", "Playwright", "Fastify", "TypeScript"],
  },
  {
    title: "Password Generator",
    href: "https://password-generator-blond-omega.vercel.app/",
    description:
      "Generador de contraseñas con React. UI mínima, validaciones y opciones de longitud, símbolos y mayúsculas.",
    tags: ["React", "Vite/CRA", "Playwright E2E"],
  },
  {
    title: "Battleship Engine / Frontend",
    href: "https://battleship-engine-frontend-3x00n7kkc-enriques-projects-c80028dc.vercel.app/",
    description:
      "Motor del juego y frontend. Colocación de barcos, estados de partida y base para niveles de IA.",
    tags: ["JavaScript/TypeScript", "React", "Arquitectura"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 to-transparent dark:from-indigo-950/20"
      />
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Proyectos destacados
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
            Muestras reales de trabajo
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Enlaces directos a demos productivas. Código limpio, accesibilidad y foco en DX.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
