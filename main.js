/* Zadání domácího úkolu
 • Vytvořte tlačítko, při jehož stisknutí se změní barva Čtvereček na zelenou.
 • Upravte kód tak, aby se výsledek funkce secti() zobrazil v prvku s ID vysledek až po stiknutí nově přidaného tlačítka "Zobraz výsledek".
 • Uprav funkci upozorni() tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu Čtvereček.

 */

function zobrazVysledek() {
document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log ("Gratulace, právě jsi spustila tuto funkci!")
  let ctverecek = document.querySelector(".ctverecek")
  ctverecek.innerHTML = "Gratulace"
}

function zmenBarvu() {
let ctverecek = document.querySelector(".ctverecek")
ctverecek.style.backgroundColor = "green"
}

