'use strict';
/* ======================================================
   🧩 Fase 1 — Càlcul de nota final amb prompt() i alert()
   ------------------------------------------------------
   OBJECTIU:
   Crear un petit programa que calculi la nota final d’un alumne
   a partir de 3 notes: teoria, pràctica i actitud.
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
   ⚙️ Conceptes clau:
   - Variables i constants (let / const)
   - Operadors aritmètics (+, -, *, /)
   - Condicions (if, else)
   - Validacions amb isNaN() i comparadors
   - Sortides amb console.log() i alert()
   ====================================================== */

// 🟢 PAS 1. Demanar dades a l’usuari amb prompt()
// Recorda: prompt() retorna text, així que cal convertir-lo amb Number()
// 1Demana el nom de l’alumne
// const nom = prompt("Nom de l'alumne:");

// Demana tres notes (teoria, pràctica, actitud)
// Pista: guarda-les com a constants i converteix-les amb Number()
// const teoria = Number(prompt("Nota de teoria (0–10):"));


// 🟢 PAS 2. Validar les dades introduïdes
// El nom no pot estar buit i les notes han de ser numèriques (0–10)
// if (...) {...}
// // Usa una condició amb if per comprovar:
// - Que el nom no estigui buit
// - Que les notes no siguin NaN i estiguin entre 0 i 10
// 💡 Exemple: isNaN(teoria) || teoria < 0 || teoria > 10

// 🟢 PAS 3. Càlcul de la nota final
// Aplica la fórmula vista al tema 2
// notaFinal = teoria * 0.4 + practica * 0.5 + actitud * 0.1;

// 🟢 PAS 4. Mostrar resultats a la consola per comprovar càlculs
// console.log("Notes → Teoria:", teoria, "Pràctica:", practica, "Actitud:", actitud);
//console.log("Nota final calculada:", notaFinal.toFixed(2));

// 🟢 PAS 5. Mostrar resultat final a l’usuari amb alert()
//if (...) {alert aprobat} else {suspes);


// 🟢 PAS 6.Mostra el resultat a la consola i amb alert()
// Usa console.log() per mostrar el procés de càlcul
// Exemple esperat a la consola:
// Nom: Marta | Teoria: 7 | Pràctica: 8 | Actitud: 9 → Nota final: 7.9