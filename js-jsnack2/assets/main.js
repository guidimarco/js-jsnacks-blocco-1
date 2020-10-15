// ASSEGNAZIONE VARIABILI
var parola1 = prompt("Inserisci la prima parola:");
var parola2 = prompt("Inserisci la seconda parola:");

// check
console.log(parola1 + " è lunga " + parola1.length);
console.log(parola2 + " è lunga " + parola2.length);

// algoritmo
if (parola1.length > parola2.length) {
    console.log("\"" + parola1 + "\" è più lunga della parola \"" + parola2 + "\"");
} else if (parola1.length < parola2.length) {
    console.log("\"" + parola2 + "\" è più lunga della parola \"" + parola1 + "\"");
} else {
    console.log("Le due parole hanno la stessa lunghezza");
}
