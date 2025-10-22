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
    tags: ["TypeScript", "React", "Game Logic"],
  },
  {
    title: "QA Control Room",
    href: "#",
    description:
      "Panel para orquestar pruebas E2E: ejecución, reporting y métricas de estabilidad.",
    tags: ["Playwright", "CI/CD", "Dashboards"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 animate-gradient">
            Proyectos destacados
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Demos productivas y código enfocado a DX, accesibilidad y mantenibilidad.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
