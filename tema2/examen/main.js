/* =========================================================
   💼 Examen NF2B — 2DAW B
   JS per navegació entre seccions + botó tornar amunt
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav a');
  const backTop = document.getElementById('backTop');

  // 🔹 Funció per mostrar una secció
  function showSection(id) {
    sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
    navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 🔹 Navegació des del header
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  // 🔹 Botons Anterior / Següent
  document.querySelectorAll('.btn.next').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextId = btn.dataset.next;
      if (nextId) showSection(nextId);
    });
  });

  document.querySelectorAll('.btn.prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const prevId = btn.dataset.prev;
      if (prevId) showSection(prevId);
    });
  });

  // 🔹 Botó Tornar amunt
  window.addEventListener('scroll', () => {
    backTop.style.display = window.scrollY > 400 ? 'block' : 'none';
  });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 🔹 Mostra la secció inicial
  showSection('objectiu');
});