// ASSEGNAZIONE VARIABILI
// array with user's numbers
var userNumbers = [];
// control var --> if isNaN restart the cicle!
var userNumberControl;
var userNumbersSum;
// number of request
var request = 5;

// ASK FOR A NUMBER
for (var i = 0; i < request; i++) {
    // i iteration - insert a number with prompt
    userNumberControl = parseInt(prompt("Inserisci un numero"));

    if (isNaN(userNumberControl)) {
        alert("Devi inserire un numero!");
        request = request + 1;
    } else {
        userNumbers.push(userNumberControl);
    }
}

// CHECK
console.log(userNumbers);

// SUM NUMBERS
userNumbersSum = 0;

for (var i = 0; i < userNumbers.length; i++) {
    userNumbersSum = userNumbersSum + userNumbers[i];
}

console.log(userNumbersSum);
