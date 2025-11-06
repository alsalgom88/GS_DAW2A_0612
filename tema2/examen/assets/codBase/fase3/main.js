'use strict';
/* ======================================================
   🧩 Fase 3 — Formulari i manipulació del DOM (versió examen)
   ------------------------------------------------------
   🎯 OBJECTIU:
   Crear una miniaplicació que permeti:
   - Introduir alumnes amb la seva nota
   - Validar les dades
   - Veure el resum del grup (mitjana, aprovats, suspesos)

   💬 En aquesta fase ja no s’utilitza prompt() ni alert().
   Treballarem amb el DOM (inputs, botons i divs de la pàgina).

   🧱 El formulari HTML, els botons i els listeners
   JA estan configurats. No cal modificar-los.
   🧩 Només has de completar la lògica dins de les funcions
   seguint les instruccions pas a pas.
   ====================================================== */

// 🧱 Array per guardar tots els alumnes i les seves notes
const alumnes = [];

// 🔗 Elements del DOM (ja preparats — no cal canviar res)
const nomInput = document.getElementById('nom');
const notaInput = document.getElementById('nota');
const resultatDiv = document.getElementById('resultat');
const btnAfegir = document.getElementById('btnAfegir');
const btnResum = document.getElementById('btnResum');
const btnReset = document.getElementById('btnReset');

// ======================================================
// 🟢 1️⃣ Funció per afegir alumnes
// ------------------------------------------------------
// ➤ Aquesta funció s’executa quan es prem el botó “Afegir alumne”.
// ➤ Has d’escriure la lògica per validar i afegir un nou alumne
//    dins de l’array global "alumnes".
function afegirAlumne() {
  // 1️⃣ Obtenim les dades escrites al formulari
  const nom = nomInput.value.trim();         // Eliminem espais del nom
  const nota = Number(notaInput.value);      // Convertim a número

  // 2️⃣ VALIDACIÓ DE DADES
  // - El nom no pot estar buit
  // - La nota ha de ser un número entre 0 i 10
  // 💡 Recorda: isNaN(valor) comprova si NO és un número

  /*
  Exemple de validació:
  if (!nom || isNaN(nota) || nota < 0 || nota > 10) {
    resultatDiv.textContent = "⚠️ Dades incorrectes! Revisa el nom o la nota.";
    resultatDiv.style.color = "red";
    console.log("⚠️ Error de validació:", { nom, nota });
    return; // Atura la funció si hi ha error
  }
  */

  // 3️⃣ Si les dades són correctes:
  // - Afegeix l’alumne a l’array amb alumnes.push({ nom, nota })
  // - Mostra un missatge verd dins resultatDiv amb el nom i la nota
  // - Mostra a la consola l’array complet (console.log o console.table)
  // - Buida els camps del formulari per preparar la següent entrada

  // 👉 Escriu aquí la teva lògica:
  // alumnes.push(...)
  // resultatDiv.textContent = ...
  // nomInput.value = "";
  // notaInput.value = "";
}

// ======================================================
// 🟢 2️⃣ Funció per calcular i mostrar el resum del grup
// ------------------------------------------------------
// ➤ Aquesta funció s’executa quan l’usuari prem “Veure resum”.
// ➤ Cal que calculis la mitjana i mostris la llista d’alumnes
//    dins del div resultat, i també que imprimeixis informació
//    detallada a la consola (console.log / console.table).
function veureResum() {
  // 1️⃣ Comprova si hi ha alumnes dins l’array
  // Si no n’hi ha, mostra un missatge i atura la funció (return)
  // Ex:
  // if (alumnes.length === 0) {
  //   resultatDiv.textContent = "⚠️ No hi ha dades per mostrar.";
  //   resultatDiv.style.color = "gray";
  //   return;
  // }

  // 2️⃣ Calcula la mitjana del grup
  // 💡 Pots fer servir reduce() per sumar totes les notes:
  // const mitjana = alumnes.reduce((a,b) => a + b.nota, 0) / alumnes.length;

  // 3️⃣ Ordena els alumnes per nota de major a menor:
  // const ordenats = [...alumnes].sort((a,b) => b.nota - a.nota);

  // 4️⃣ Mostra la informació per consola:
  // console.table(alumnes);
  // console.log("Mitjana:", mitjana.toFixed(2));
  // console.log("Millor alumne:", ordenats[0].nom, ordenats[0].nota);
  // console.log("Pitjor alumne:", ordenats[ordenats.length - 1].nom, ...);

  // 5️⃣ Mostra el resultat al DOM amb innerHTML:
  // resultatDiv.innerHTML = `
  //   <h3>📊 Resum del grup</h3>
  //   <p>Mitjana: <strong>${mitjana.toFixed(2)}</strong></p>
  //   <ul>
  //     ${ordenats.map(a => `<li>${a.nom} — ${a.nota}</li>`).join("")}
  //   </ul>
  // `;
  // resultatDiv.style.color = "#1e293b";
}

// ======================================================
// 🟢 3️⃣ Funció per netejar resultats i reiniciar dades
// ------------------------------------------------------
// ➤ Aquesta funció s’executa quan es prem “Netejar”.
// ➤ Serveix per començar de zero: buida el contingut i l’array.
function netejar() {
  // 1️⃣ Buida el contingut del div resultat
  // resultatDiv.textContent = "Encara no hi ha dades introduïdes.";

  // 2️⃣ Reinicia l’array: alumnes.length = 0;

  // 3️⃣ Mostra per consola un missatge de confirmació
  // console.log("🧹 Dades reiniciades correctament.");
}

// ======================================================
// 🔗 ASSOCIACIÓ DELS BOTONS (listeners ja fets — NO TOQUIS)
// ------------------------------------------------------
// ✅ Quan l’usuari prem un botó, es crida automàticament
//    la funció corresponent (no cal afegir cap addEventListener).
btnAfegir.addEventListener('click', afegirAlumne);
btnResum.addEventListener('click', veureResum);
btnReset.addEventListener('click', netejar);

// ======================================================
// 💡 Recomanacions finals per l’examen
// ------------------------------------------------------
// - Comprova sempre la consola del navegador (F12 → Console)
// - Usa console.log() per veure els valors intermedis
// - No cal fer disseny: només la lògica i la validació
// - Organitza el teu codi i comenta cada pas
// - Si tens temps, pots fer opcionalment colors segons nota (verd/vermell)
// ======================================================