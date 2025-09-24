import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}