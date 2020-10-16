// <1-fold --- VERSION 1.0 --- with array first n numbers
// // ASSIGNMENT OF VARIABLES
// // choose the first n number to calculate sum and average
// var n = 10;
// var OneToN = [];
// var sum = 0;
// var average;
//
// // FIRST N NUMBER
// for (var i = 1; i <= n; i++) {
//     OneToN.push(i);
// }
//
// console.log(OneToN);
//
// // SUM OF SERIE
// for (var i = 0; i < OneToN.length; i++) {
//     sum = sum + OneToN[i];
// }
//
// console.log("Somma dei primi " + n + " numeri è " + sum);
//
// // AVERAGE
// average = sum / n;
//
// console.log("La media dei primi " + n + " numeri è " + average);
// </1-fold

// <1-fold --- VERSION 2.0 --- without array
// ASSIGNMENT OF VARIABLES
// choose the first n (> 0) number to calculate sum and average
var n = 10;
var sum = 0;
var average;

// SUM OF SERIE
for (var i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Somma dei primi " + n + " numeri è " + sum);

// AVERAGE
average = sum / n;

console.log("La media dei primi " + n + " numeri è " + average);
// </1-fold
