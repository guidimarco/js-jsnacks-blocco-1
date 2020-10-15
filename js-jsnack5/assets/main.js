// ASSEGNAZIONE VARIABILI
// user's natural number
var number;
// first n-cube
var firstNCube = [];

// ASK FOR A NUMBER
number = parseInt(prompt("Inserisci un numero naturale positivo:"));

console.log("Numero scelto: " + number);


// CHECK THE NUMBER AND STAMP THE FIRST N CUBE
if (!isNaN(number) && number >= 1) {
    for (var i = 1; i <= number; i++) {
        // CREATION ARREY - FIRST N NUMBER
        firstNCube.push(i * i * i)
        console.log(i + " al cubo è " + i * i * i);
    }
} else {
    // is Not a Number or is a negative number
    alert("Numero non corretto. Refresha e inserisci un nuovo numero.")
}

console.log(firstNCube);
