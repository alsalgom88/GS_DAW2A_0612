'use strict';
/* ======================================================
   🧩 Fase 1 — Càlcul de nota final amb prompt() i alert()
   ------------------------------------------------------
   🎯 OBJECTIU:
   Crear un petit programa que calculi la nota final d’un alumne
   a partir de tres notes: teoria, pràctica i actitud.

   Aquesta fase és essencial: si la completes correctament,
   ja hauràs demostrat dominar els continguts del Tema 2
   (variables, operadors, condicions i validacions bàsiques).

   🧠 Conceptes que posaràs en pràctica:
   - Variables i constants (let / const)
   - Operadors aritmètics (+, -, *, /)
   - Condicions (if / else)
   - Validacions amb isNaN() i comparadors
   - Interacció amb l’usuari amb prompt() i alert()
   - Sortides amb console.log() per comprovar càlculs
   ====================================================== */


/* ======================================================
   🔹 PAS 1️⃣ — Demanar dades a l’usuari
   ------------------------------------------------------
   💡 Recorda:
   - prompt() retorna text, així que cal convertir-lo a número
     amb Number() per poder fer càlculs.
   - Pots declarar les variables amb const si no canvien.
   ====================================================== */

// const nom = prompt("Nom de l'alumne:");
// const teoria = Number(prompt("Nota de teoria (0–10):"));
// const practica = Number(prompt("Nota de pràctica (0–10):"));
// const actitud = Number(prompt("Nota d’actitud (0–10):"));



/* ======================================================
   🔹 PAS 2️⃣ — Validar les dades introduïdes
   ------------------------------------------------------
   📋 Regles de validació:
   - El nom no pot estar buit.
   - Les notes han d’estar entre 0 i 10.
   - Cap dada pot ser NaN (no numèrica).

   💡 Pista:
   La funció isNaN(valor) comprova si un valor no és numèric.
   Exemples:
     isNaN(5) → false
     isNaN("hola") → true
   ====================================================== */

// if (!nom || isNaN(teoria) || isNaN(practica) || isNaN(actitud) ||
//     teoria < 0 || teoria > 10 || practica < 0 || practica > 10 || actitud < 0 || actitud > 10) {
//   alert("⚠️ Dades no vàlides! Revisa els valors introduïts.");
//   console.log("❌ Error en la validació:", { nom, teoria, practica, actitud });
// } else {
//   // Continua amb el càlcul
// }



/* ======================================================
   🔹 PAS 3️⃣ — Càlcul de la nota final
   ------------------------------------------------------
   📐 Fórmula oficial del temari:
       notaFinal = teoria * 0.4 + pràctica * 0.5 + actitud * 0.1;

   💡 Recorda: 
   - Pots guardar el resultat en una variable const.
   - Fes servir .toFixed(2) per limitar a 2 decimals.
   ====================================================== */

// const notaFinal = teoria * 0.4 + practica * 0.5 + actitud * 0.1;



/* ======================================================
   🔹 PAS 4️⃣ — Mostrar resultats a la consola
   ------------------------------------------------------
   ✏️ És molt recomanable comprovar a la consola (F12 → Console)
   que les dades i els càlculs són correctes abans de mostrar
   el missatge final amb alert().
   ====================================================== */

// console.log("📘 Alumne:", nom);
// console.log("Notes → Teoria:", teoria, "| Pràctica:", practica, "| Actitud:", actitud);
// console.log("Nota final calculada:", notaFinal.toFixed(2));



/* ======================================================
   🔹 PAS 5️⃣ — Mostrar resultat final amb alert()
   ------------------------------------------------------
   💬 En funció de la nota final:
   - Si és ≥ 5 → “✅ Aprovat” 
   - Si és < 5 → “❌ Suspes”

   Pots mostrar el missatge així:
   alert(`✅ ${nom} ha aprovat amb un ${notaFinal.toFixed(2)}`);
   o amb condicions if / else:
   ====================================================== */

// if (notaFinal >= 5) {
//   alert(`✅ ${nom} ha aprovat amb un ${notaFinal.toFixed(2)}!`);
// } else {
//   alert(`❌ ${nom} no ha superat el mòdul. Nota: ${notaFinal.toFixed(2)}`);
// }



/* ======================================================
   🔹 PAS 6️⃣ — Exemple esperat de sortida (a la consola)
   ------------------------------------------------------
   📊 Exemple:
   Nom de l’alumne: Marta
   Notes → Teoria: 7 | Pràctica: 8 | Actitud: 9
   Nota final: 7.9
   Resultat: ✅ Aprovat

   💡 Consell final:
   - Prova amb diferents valors (p.ex. 0, 5, 10)
   - Comprova que el programa mostra alertes correctes
   - Si tens errors, revisa la consola!
   ====================================================== */