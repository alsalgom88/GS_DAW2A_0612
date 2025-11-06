'use strict';
/* ======================================================
   🧩 Fase 3 — Formulari i manipulació del DOM (versió examen)
   ------------------------------------------------------
   OBJECTIU:
   Crear una miniaplicació que permeti:
   - Introduir alumnes amb la seva nota
   - Validar les dades
   - Veure el resum del grup (mitjana, aprovats, suspesos)
   ------------------------------------------------------
   🧱 El DOM, els botons i els listeners ja estan configurats.
   🧩 Només has de completar la lògica dins de les funcions següents.
   ====================================================== */

// 🧱 Array per guardar els alumnes
const alumnes = [];

// 🔗 Elements del DOM (NO MODIFIQUIS)
const nomInput = document.getElementById('nom');
const notaInput = document.getElementById('nota');
const resultatDiv = document.getElementById('resultat');
const btnAfegir = document.getElementById('btnAfegir');
const btnResum = document.getElementById('btnResum');
const btnReset = document.getElementById('btnReset');

// ======================================================
// 🟢 1️⃣ Funció per afegir alumnes
// ------------------------------------------------------
// Aquesta funció s’executa quan es prem el botó “Afegir alumne”.
// Has d’escriure la lògica per validar i afegir un alumne nou.
function afegirAlumne() {
  // 1️⃣ Obtenim les dades del formulari
  const nom = nomInput.value.trim();
  const nota = Number(notaInput.value);

  // 2️⃣ Validació de les dades
  // 👉 Comprova que el nom no estigui buit.
  // 👉 Comprova que la nota sigui numèrica i estigui entre 0 i 10.
  // 💡 Recorda usar isNaN() per saber si no és un número.

  // Exemple de validació:
  // if (!nom || isNaN(nota) || nota < 0 || nota > 10) {
  //   resultatDiv.textContent = "⚠️ Dades incorrectes! Revisa el nom o la nota.";
  //   resultatDiv.style.color = "red";
  //   console.log("⚠️ Error de validació:", { nom, nota });
  //   return;
  // }

  // 3️⃣ Si les dades són correctes:
  // - Afegeix l’alumne a l’array: alumnes.push({nom, nota});
  // - Mostra un missatge verd amb resultatDiv.textContent
  // - Mostra per consola l’array complet (console.log(alumnes))
  // - Buida els camps del formulari (nomInput.value = "")
}

// ======================================================
// 🟢 2️⃣ Funció per calcular i mostrar el resum del grup
// ------------------------------------------------------
// Aquesta funció es crida quan es prem “Veure resum”.
// Has de calcular la mitjana, mostrar els alumnes ordenats per nota,
// i mostrar un petit resum al div resultat.
function veureResum() {
  // 1️⃣ Comprova si hi ha alumnes a l’array.
  // 👉 Si no n’hi ha, mostra un missatge al div resultat i surt (return).

  // 2️⃣ Calcula la mitjana del grup.
  // 💡 Pista: pots fer servir reduce() per sumar les notes i dividir pel total.

  // 3️⃣ Ordena els alumnes per nota (descendent).
  // 💡 Usa sort((a, b) => b.nota - a.nota)

  // 4️⃣ Mostra per consola:
  // - console.table(alumnes)
  // - console.log("Mitjana:", mitjana)
  // - console.log("Millor alumne:", ...)
  // - console.log("Pitjor alumne:", ...)

  // 5️⃣ Mostra al div resultat:
  // - La mitjana del grup
  // - Una llista amb nom i nota (pots fer-ho amb HTML dins resultatDiv.innerHTML)
}

// ======================================================
// 🟢 3️⃣ Funció per netejar resultats i reiniciar dades
// ------------------------------------------------------
// Aquesta funció s’executa quan es prem el botó “Netejar”.
function netejar() {
  // 1️⃣ Buida el contingut del div resultat.
  // 2️⃣ Reinicia l’array d’alumnes (alumnes.length = 0).
  // 3️⃣ Mostra un missatge per consola indicant que s’ha netejat tot.
}

// ======================================================
// 🔗 ASSOCIACIÓ DELS BOTONS (listeners ja fets, NO TOQUIS)
// ------------------------------------------------------
// Quan l’usuari prem cada botó, es crida la seva funció corresponent.
btnAfegir.addEventListener('click', afegirAlumne);
btnResum.addEventListener('click', veureResum);
btnReset.addEventListener('click', netejar);