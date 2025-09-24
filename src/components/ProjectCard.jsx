import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${project.title} en una nueva pestaña`}
      className="group rounded-2xl p-px bg-gradient-to-r from-indigo-500/60 via-sky-500/60 to-fuchsia-500/60 hover:from-indigo-500 hover:via-sky-500 hover:to-fuchsia-500 transition"
    >
      <div className="rounded-2xl h-full w-full bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg hover:-translate-y-0.5 backdrop-blur p-5 transition-all duration-300">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 opacity-70 transition group-hover:opacity-100" />
        </div>

        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className="text-[11px] rounded-full border border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-800/60 px-2.5 py-1 tracking-wide text-zinc-700 dark:text-zinc-200"
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
