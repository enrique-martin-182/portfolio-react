import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
    SiSelenium,  SiNodedotjs,
  SiGit,
  SiHtml5,
  SiCss3,
  SiFastify,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "Playwright", icon: <SiSelenium size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "Node.js", icon: <SiNodedotjs size={32} /> },
  { name: "Fastify", icon: <SiFastify size={32} /> },
  { name: "Git", icon: <SiGit size={32} /> },
  { name: "HTML5", icon: <SiHtml5 size={32} /> },
  { name: "CSS3", icon: <SiCss3 size={32} /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8 md:mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Tecnologías
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
            Mi Stack de Desarrollo
          </h2>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-white dark:hover:bg-zinc-900"
            >
              <div className="text-zinc-700 dark:text-zinc-300">{skill.icon}</div>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
