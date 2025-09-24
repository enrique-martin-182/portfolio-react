import React from 'react';

import computadora from '../assets/images/computadora.png';


const proyectos = [
  { id: 1, title: 'QA Testing', desc: 'Automatización de pruebas con Playwright', img: computadora },
  { id: 2, title: 'Desarrollo de aplicaciones web', desc: 'Implementación del frontend con versatilidad', img: computadora },
  { id: 3, title: 'Desarrollo y diseño de videojuegos', desc: 'Diseño de proyectos relacionados con el mundo de los videojuegos y su implementación', img: computadora },
  { id: 4, title: 'Páginas web bancarias', desc: 'Diseño de páginas web para entidades bancarias', img: computadora },
  { id: 5, title: 'Aplicaciones interactivas para niños', desc: 'Creación de diversos juegos web con una interfaz sencilla para los más pequeños', img: computadora },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Mis Proyectos</h2>
      <div className="cards-container">
        {proyectos.map(p => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}