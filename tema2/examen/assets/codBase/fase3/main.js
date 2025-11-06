'use strict';
/* ======================================================
   🧩 Fase 3 — Formulari HTML i manipulació del DOM
   ------------------------------------------------------
   Objectiu:
   - Afegir alumnes amb les seves notes mitjançant un formulari
   - Validar les dades (nom i nota)
   - Mostrar resultats i mitjana dins del div #resultat

   💡 Pistes:
   - Usa document.querySelector() per accedir als inputs i botons
   - Guarda els alumnes en un array d’objectes { nom, nota }
   - Fes servir addEventListener() per detectar clics als botons
   - Mostra els resultats dins del DOM amb innerHTML o textContent
   ====================================================== */

// 1️⃣ Crea un array buit per desar els alumnes
// const alumnes = [];

// 2️⃣ Accedeix als elements HTML amb querySelector()
// Exemple:
// const nomInput = document.querySelector('#nom');
// const notaInput = document.querySelector('#nota');
// const resultatDiv = document.querySelector('#resultat');

// 3️⃣ Afegeix un event listener al botó "Afegir alumne"
// Quan es faci clic:
//   - Llegeix els valors dels inputs
//   - Valida el nom (no buit) i la nota (0–10)
//   - Usa isNaN() per comprovar si la nota és numèrica
//   - Si és correcte, afegeix l’alumne a l’array
//   - Mostra un missatge al div amb textContent
// 💡 Mostra també l’estat actual de l’array amb console.log(alumnes);

// 4️⃣ Afegeix un event listener al botó "Veure resum"
// Quan es premi:
//   - Calcula la mitjana del grup
//   - Ordena els alumnes per nota (descendent)
//   - Mostra la llista i la mitjana dins del div amb innerHTML
//   - Pots usar plantilles literals per mostrar-ho de forma bonica
// Exemple de format esperat:
//   Mitjana: 7.3
//   1. Júlia - 9
//   2. Pau - 6.5

// 5️⃣ Fes servir console.log() per depurar
// Mostra cada pas del procés: afegir, validar, calcular, etc.