import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25 mask-fade" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10 sm:pt-20 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 animate-gradient">
                Frontend Developer & QA Automation
              </span>
              <span className="block text-zinc-300 text-lg sm:text-xl font-normal mt-4">
                React · TypeScript · Playwright · Tailwind
              </span>
            </h1>

            <p className="mt-5 text-zinc-400 max-w-xl">
              Construyo interfaces rápidas y cuidadas, con pruebas E2E y despliegues sencillos.
              Aquí tienes demos reales y código limpio listo para escalar.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sm hover:bg-sky-500/20 transition"
              >
                Ver proyectos
              </a>
              <a
                href="/cv.pdf"
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm hover:bg-emerald-500/20 transition"
              >
                Descargar CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEPARADOR */}
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="my-8 border-zinc-800"
      />

      <ProjectsSection />
      <ContactSection />

      <footer className="py-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Enrique Martín · Hecho con React + Tailwind
      </footer>
    </div>
  );
}
