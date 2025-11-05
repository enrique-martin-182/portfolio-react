import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${project.title} en una nueva pestaña`}
      className="group relative block rounded-2xl p-px bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-fuchsia-500/20 hover:via-sky-500/35 hover:to-fuchsia-500/35 transition"
    >
      <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-5 shadow-sm outline-none dark:border-zinc-800/70 dark:bg-zinc-900/60 backdrop-blur will-change-transform group-hover:-translate-y-[3px] transition">
        {/* Halo en hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-fuchsia-500/20"
        />

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400">
            {project.title}
          </h3>
          <span className="rounded-full border border-zinc-200/70 p-2 text-zinc-600 transition group-hover:scale-105 group-hover:bg-zinc-50 dark:border-zinc-800/70 dark:text-zinc-300 dark:group-hover:bg-zinc-800 group-hover:shadow-glow">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        {project.description && (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>
        )}

        {project.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className="text-[11px] rounded-full border border-zinc-200/60 bg-white/60 px-2.5 py-1 tracking-wide text-zinc-700 dark:text-zinc-200 dark:bg-zinc-900/50 backdrop-blur-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.a>
  );
}