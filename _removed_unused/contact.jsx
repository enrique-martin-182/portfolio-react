import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return alert('Completa todos los campos');
    }
    alert('¡Mensaje enviado con éxito!');
    setForm({ name: '', email: '', message: '' });
  };

  // Animar badges y cards al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(0) scale(1)';
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.card, .badge').forEach(el => {
      // Inicialmente ocultos
      el.style.transform = 'translateY(50px) scale(0.8)';
      el.style.opacity = '0';
      observer.observe(el);
    });
  }, []);

  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Mensaje
          <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}