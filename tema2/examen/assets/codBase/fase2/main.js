'use strict';
/* ======================================================
   🧩 Fase 2 — Gestor de notes amb arrays i funcions
   ------------------------------------------------------
   Objectiu:
   - Gestionar diversos alumnes i les seves notes
   - Fer servir arrays i objectes
   - Calcular la mitjana, millor i pitjor alumne
   - Mostrar resultats amb console.log()

   💡 Pistes:
   - Usa prompt() per demanar quants alumnes vols afegir
   - Declara un array buit const alumnes = [];
   - Fes servir un bucle (for) per recollir cada alumne
   - Cada alumne hauria de ser un objecte { nom, nota }
   - Valida cada nota amb isNaN()
   ====================================================== */

// 1️⃣ Declara un array per desar els alumnes
// const alumnes = [];

// 2️⃣ Demana amb prompt() quants alumnes vols afegir
// ⚠️ Converteix la resposta a número amb Number()

// 3️⃣ Fes un bucle per repetir tantes vegades com alumnes hi hagi
// Dins el bucle:
//  - Demana nom i nota
//  - Valida la nota (0–10)
//  - Desa l’objecte dins l’array amb push()

// 4️⃣ Després del bucle, calcula:
//  - La mitjana del grup
//  - L’alumne amb millor i pitjor nota
//  💡 Pista: pots fer servir reduce(), Math.max() o un bucle for...of

// 5️⃣ Mostra tota la informació amb console.log()
// Exemple esperat:
// Llista d'alumnes: [{nom:'Pau',nota:6}, {nom:'Júlia',nota:9}]
// Mitjana: 7.5 | Millor: Júlia (9) | Pitjor: Pau (6)