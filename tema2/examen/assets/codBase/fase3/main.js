'use strict';
/* ======================================================
   🧩 Fase 3 — Miniaplicació de notes amb formulari (DOM preconfigurat)
   ------------------------------------------------------
   Objectiu:
   - Practicar arrays i condicions sense manipular el DOM.
   - Només cal completar la lògica de càlcul i validació.
   ====================================================== */

// 🧱 Array d'alumnes (ja creat)
const alumnes = [];

// ⚙️ Simulació d'entrades (no cal modificar res aquí)
function obtenirDades() {
  const nom = prompt("Nom de l'alumne:");
  const nota = Number(prompt(`Nota de ${nom} (0–10):`));
  return { nom, nota };
}

// 📥 Funció principal per afegir alumnes
function afegirAlumne() {
  const { nom, nota } = obtenirDades();

  // 👉 Escriu aquí la validació amb isNaN(), <0, >10, nom buit...

  // 👉 Si és correcte, afegeix a l’array alumnes.push({nom, nota})
  // 👉 Mostra per consola l’alumne afegit i l’array complet
}

// 📊 Funció per calcular el resum del grup
function veureResum() {
  // 👉 Calcula mitjana, millor i pitjor alumne, aprovats i suspesos
  // 👉 Mostra-ho amb console.log()
}

// 🚀 Execució (ja feta)
// No cal que toquis aquestes crides: simulen el comportament del formulari.
afegirAlumne();
veureResum();