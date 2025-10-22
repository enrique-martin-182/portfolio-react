import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>¡Hola! Soy Enrique Martín Puya</h1>
      <p>Desarrollador web full‑stack apasionado por experiencias interactivas.</p>

      <div className="hero-buttons">
        <button onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
          Ver Proyectos
        </button>

        
        <div className="social-buttons">
          <a
            href="https://github.com/Shikari182"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social github"
          >
            <FaGithub size={20}/> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/enrique-mart%C3%ADn-puya-a7454318b/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social linkedin"
          >
            <FaLinkedin size={20}/> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
