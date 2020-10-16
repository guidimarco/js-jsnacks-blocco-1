// <1-fold --- VERSION 1.0 --- take the users numbers
// // VAR ASSIGNMENT
// // array with user's numbers
// var userNumbers = [];
// // control var --> if isNaN restart the cicle!
// var userNumberControl;
// var userNumbersSum;
// // number of request
// var request = 5;
//
// // ASK FOR A NUMBER
// for (var i = 0; i < request; i++) {
//     // i iteration - insert a number with prompt
//     userNumberControl = parseInt(prompt("Inserisci un numero"));
//
//     if (isNaN(userNumberControl)) {
//         alert("Devi inserire un numero!");
//         request = request + 1;
//     } else {
//         userNumbers.push(userNumberControl);
//     }
// }
//
// // CHECK
// console.log(userNumbers);
//
// // SUM NUMBERS
// userNumbersSum = 0;
//
// for (var i = 0; i < userNumbers.length; i++) {
//     userNumbersSum = userNumbersSum + userNumbers[i];
// }
//
// console.log(userNumbersSum);
// </1-fold

// <1-fold --- VERSION 2.0 --- optimized version --> forgot the users numbers
// VAR ASSIGNMENT
// control var --> if isNaN restart the cicle!
var userNumber;
// number of request
var request = 5;

var userNumbersSum = 0;

// ASK FOR A NUMBER AND CALCUTE SUM
for (var i = 0; i < request; i++) {
    // i iteration - insert a number with prompt
    userNumber = parseInt(prompt("Inserisci un numero"));

    if (isNaN(userNumber)) {
        alert("Devi inserire un numero!");
        request = request + 1;
    } else {
        console.log("Numero inserito: " + userNumber);
        userNumbersSum = userNumbersSum + userNumber;
    }
}

// CHECK
console.log("Somma: " + userNumbersSum);
// </1-fold
