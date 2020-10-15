// ASSEGNAZIONE VARIABILI
var number1 = parseInt(prompt("Numero 1:"));
var number2 = parseInt(prompt("Numero 2:"));

// check
console.log("Numero 1: " + number1);
console.log("Numero 2: " + number2);

// greater number
if (!isNaN(number1) && !isNaN(number2)) {
    if (number1 > number2) {
        console.log("Numero maggiore: " + number1);
    } else if (number2 > number1) {
        console.log("Numero maggiore: " + number2);
    } else {
        console.log("Stesso numero!");
    }
} else {
    alert("Refresha e reinserisci")
}
