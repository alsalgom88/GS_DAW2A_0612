'use strict';
/* ======================================================
   🧩 Fase 1 — Càlcul de nota final amb prompt() i alert()
   ------------------------------------------------------
   Objectiu:
   - Demanar el nom i tres notes (teoria, pràctica, actitud)
   - Validar que les notes siguin numèriques i estiguin entre 0 i 10
   - Calcular la nota final aplicant la fórmula del temari
   - Mostrar si l’alumne ha aprovat o suspès

   💡 Pistes:
   - Usa prompt() per demanar les dades
   - Converteix les entrades a números amb Number()
   - Usa isNaN() per validar valors no numèrics
   - Mostra missatges a la consola amb console.log()
   - Mostra el resultat final amb alert()
   ====================================================== */

// 1️⃣ Demana el nom de l’alumne
// const nom = prompt("Nom de l'alumne:");

// 2️⃣ Demana tres notes (teoria, pràctica, actitud)
// ⚠️ Pista: guarda-les com a constants i converteix-les amb Number()

// 3️⃣ Valida les dades
// Usa una condició amb if per comprovar:
// - Que el nom no estigui buit
// - Que les notes no siguin NaN i estiguin entre 0 i 10
// 💡 Exemple: isNaN(teoria) || teoria < 0 || teoria > 10

// 4️⃣ Calcula la nota final amb la fórmula del temari:
// teoria * 0.4 + practica * 0.5 + actitud * 0.1

// 5️⃣ Mostra el resultat a la consola i amb alert()
// Usa console.log() per mostrar el procés de càlcul
// Exemple esperat a la consola:
// Nom: Marta | Teoria: 7 | Pràctica: 8 | Actitud: 9 → Nota final: 7.9