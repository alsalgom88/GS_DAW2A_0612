'use strict';

// 🌱 Fade-in suau de les seccions (mantingut)
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));

  // ⬆️ Botó per tornar a dalt
  const topButton = document.querySelector('.back-top');
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// 👆 Mostra/amaga el botó “Tornar amunt”
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backTop.style.opacity = '1';
    backTop.style.pointerEvents = 'auto';
  } else {
    backTop.style.opacity = '0';
    backTop.style.pointerEvents = 'none';
  }
});

// 💻 Fons Matrix animat — amb rastre llarg i efecte de pluja
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

// Dimensions inicials
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Configuració del text Matrix
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Dibuixa cada frame del Matrix
function drawMatrix() {
  // 🔥 Fons semitransparent amb menys opacitat = estela més llarga
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; // abans 0.25 → ara deixa més rastre
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Color verd-neó translúcid amb un toc més brillant
  ctx.fillStyle = 'rgba(0, 255, 153, 0.6)';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // reinicia la gota amb certa probabilitat
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// ⏱️ Velocitat i suavitat de caiguda
setInterval(drawMatrix, 45);

// 🔁 Ajusta el canvas si canvia la mida de la finestra
window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});