import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript (cliente)','TypeScript', 'React', 'Node.js', 'Playwright', 'Python', 'Pygame', 'Django', 'Flask', 'Git', 'GitHub',
  'Angular', 'Vue.js', 'Tailwind', 'MySQL', 'MongoDB', 'Oracle', 'C', 'Selenium', 'PHP'
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <div className="badges">
        {skills.map(s => <span key={s} className="badge">{s}</span>)}
      </div>
    </section>
  );
}