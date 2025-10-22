import { Mail, Github, Linkedin } from "lucide-react";

const EMAIL = "enriquemartinpuya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/enrique-mart%C3%ADn-puya-a7454318b/";
const GITHUB = "https://github.com/enrique-martin-182";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur mask-fade">
          <h3 className="text-xl font-semibold mb-2">¿Hablamos?</h3>
          <p className="text-sm text-zinc-300 mb-6">
            Abierto a roles de Frontend (React/TS) y QA Automation (Playwright). 100% remoto desde España.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 hover:bg-zinc-800 transition">
              <Mail size={16}/> <span>{EMAIL}</span>
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 hover:bg-zinc-800 transition">
              <Github size={16}/> <span>GitHub</span>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-sky-700 px-4 py-2 hover:bg-sky-900/40 transition">
              <Linkedin size={16}/> <span>LinkedIn</span>
            </a>
            <a href="/cv.pdf" className="inline-flex items-center gap-2 rounded-xl border border-emerald-700 px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 transition">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
