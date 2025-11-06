'use strict';
/* ======================================================
   🧩 Fase 2 — Gestor de notes amb arrays i funcions
   ------------------------------------------------------
   🎯 OBJECTIU:
   Crear un programa que gestioni un grup d’alumnes i les seves notes.

   Aquesta fase amplia la Fase 1. Ara ja no treballem amb un sol alumne,
   sinó amb tot un conjunt de dades. 
   L’objectiu és demostrar que saps fer servir arrays, objectes i bucles.

   🧠 Què aprendràs a aplicar:
   - Declaració i ús d’arrays (llistes)
   - Objectes simples { nom, nota }
   - Bucles for / for...of
   - Validacions amb isNaN()
   - Funcions per organitzar millor el codi
   - Mostra de resultats amb console.log() i console.table()
   ====================================================== */


/* ======================================================
   🔹 PAS 1️⃣ — Crear la llista d’alumnes
   ------------------------------------------------------
   Declara un array buit per desar tots els alumnes amb les seves notes.
   Cada alumne serà un objecte com aquest:
   { nom: "Anna", nota: 8 }
   ====================================================== */

// const alumnes = [];



/* ======================================================
   🔹 PAS 2️⃣ — Preguntar quants alumnes vols afegir
   ------------------------------------------------------
   Usa prompt() per demanar el nombre d’alumnes.
   ⚠️ Recorda convertir el resultat a número amb Number()
   i validar que sigui un valor correcte (> 0).
   💡 Exemple:
   const total = Number(prompt("Quants alumnes vols afegir?"));
   if (isNaN(total) || total <= 0) {
     console.log("⚠️ Has d’introduir un número vàlid.");
   }
   ====================================================== */



/* ======================================================
   🔹 PAS 3️⃣ — Recollir dades de cada alumne dins d’un bucle
   ------------------------------------------------------
   Utilitza un bucle for per repetir tantes vegades com alumnes hi hagi.

   Dins del bucle:
   1. Demana el nom amb prompt()
   2. Demana la nota i converteix-la amb Number()
   3. Valida la nota:
      - No pot ser NaN
      - Ha d’estar entre 0 i 10
   4. Si les dades són correctes, afegeix l’objecte a l’array:
      alumnes.push({ nom, nota });
   5. Si hi ha un error, mostra un missatge amb console.log()
   ====================================================== */

// for (...) {
//   const nom = prompt(`Nom de l'alumne ${i + 1}:`);
//   const nota = Number(prompt(`Nota de ${nom} (0–10):`));

//   // Validació de la nota
//   if (!nom || isNaN(nota) || nota < 0 || nota > 10) {
//     console.log("⚠️ Dades incorrectes per a:", nom);
//     continue; // Salta aquest alumne
//   }

//   // Afegim l’alumne vàlid a la llista
//   alumnes.push({ nom, nota });
// }



/* ======================================================
   🔹 PAS 4️⃣ — Mostrar la llista d’alumnes per consola
   ------------------------------------------------------
   Usa console.table() per veure clarament els noms i les notes.
   💡 Exemple:
   console.table(alumnes);
   ====================================================== */



/* ======================================================
   🔹 PAS 5️⃣ — Calcular resultats globals
   ------------------------------------------------------
   Un cop recollides totes les dades:
   - Calcula la mitjana de totes les notes
   - Troba el millor alumne (nota més alta)
   - Troba el pitjor alumne (nota més baixa)
   - Compta quants han aprovat (nota >= 5) i suspès (nota < 5)

   💡 Pistes útils:
   - reduce() → per sumar totes les notes
   - sort() → per ordenar
   - filter() → per comptar aprovats/suspesos
   ====================================================== */

// if (alumnes.length > 0) {
//   // Exemple amb reduce()
//   // const mitjana = alumnes.reduce((a, b) => a + b.nota, 0) / alumnes.length;

//   // Exemple amb bucle for...of
//   // let suma = 0;
//   // for (const alumne of alumnes) {
//   //   suma += alumne.nota;
//   // }
//   // const mitjana = suma / alumnes.length;

//   // Exemple de com trobar millor i pitjor alumne
//   // const millor = alumnes.reduce((a, b) => (a.nota > b.nota ? a : b));
//   // const pitjor = alumnes.reduce((a, b) => (a.nota < b.nota ? a : b));

//   // Comptar aprovats i suspesos
//   // const aprovats = alumnes.filter(a => a.nota >= 5).length;
//   // const suspesos = alumnes.filter(a => a.nota < 5).length;

//   // Mostrar resultats
//   // console.log("📊 Resum del grup:");
//   // console.log(`Mitjana: ${mitjana.toFixed(2)}`);
//   // console.log(`Millor alumne: ${millor.nom} (${millor.nota})`);
//   // console.log(`Pitjor alumne: ${pitjor.nom} (${pitjor.nota})`);
//   // console.log(`Aprovats: ${aprovats} | Suspesos: ${suspesos}`);
// } else {
//   console.log("⚠️ No hi ha alumnes per processar.");
// }



/* ======================================================
   🔹 PAS 6️⃣ — Exemple esperat de sortida (a la consola)
   ------------------------------------------------------
   📋 Llista d'alumnes:
   ┌─────────┬──────────┬───────┐
   │ (índex) │   nom    │ nota  │
   ├─────────┼──────────┼───────┤
   │    0    │  "Pau"   │   6   │
   │    1    │ "Júlia"  │   9   │
   │    2    │ "Marc"   │   4   │
   └─────────┴──────────┴───────┘

   📊 Resum del grup:
   Mitjana: 6.33
   Millor alumne: Júlia (9)
   Pitjor alumne: Marc (4)
   Aprovats: 2 | Suspesos: 1
   ====================================================== */



/* ======================================================
   💡 RECOMANACIONS FINALS
   ------------------------------------------------------
   - Escriu sempre 'use strict' al principi del fitxer
   - Comprova les teves sortides amb console.log() i console.table()
   - Comenta el codi per explicar què fa cada part
   - No utilitzis var ni == → fes servir const/let i comparadors estrictes ===
   - Si apareixen errors, revisa la consola del navegador (F12 → "Console")
   ====================================================== */