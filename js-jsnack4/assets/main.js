// <1-fold --- VERS 1 --- err: i modified
// // ASSEGNAZIONE VARIABILI
// // array with user's numbers
// var userNumbers = [];
// // control var --> if isNaN restart the cicle!
// var userNumberControl;
//
// // ASK FOR A NUMBER
// for (var i = 0; i < 6; i++) {
//     // i iteration - insert a number with prompt
//     userNumberControl = parseInt(prompt("Inserisci un numero"));
//
//     if (isNaN(userNumberControl)) {
//         // isNaN - repeat the cicle
//         alert("Devi inserire un numero!");
//         i = i - 1;
//     } else if (userNumberControl % 2 == 0) {
//         // userNumber even
//         console.log("Il numero inserito è pari: " + userNumberControl);
//     } else {
//         // userNumber odd
//         userNumbers.push(userNumberControl);
//         console.log("Il numero inserito è dispari: " + userNumberControl);
//     }
// }
//
// // CHECK
// console.log(userNumbers);
// </1-fold

// <1-fold --- VERS 2 --- corrected error
// ASSEGNAZIONE VARIABILI
// array with user's numbers
var userNumbers = [];
// control var --> if isNaN restart the cicle!
var userNumberControl;
// request var
var request = 6;

// ASK FOR A NUMBER
for (var i = 0; i < request; i++) {
    // i iteration - insert a number with prompt
    userNumberControl = parseInt(prompt("Inserisci un numero"));

    if (isNaN(userNumberControl)) {
        // isNaN - repeat the cicle
        alert("Devi inserire un numero!");
        request = request + 1;
    } else if (userNumberControl % 2 == 0) {
        // userNumber even
        console.log("Il numero inserito è pari: " + userNumberControl);
    } else {
        // userNumber odd
        userNumbers.push(userNumberControl);
        console.log("Il numero inserito è dispari: " + userNumberControl);
    }
}

// CHECK
console.log(userNumbers);
// </1-fold
