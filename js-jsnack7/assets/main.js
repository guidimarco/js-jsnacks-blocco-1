// ASSIGNMENT OF VARIABLES
// choose the first n number to calculate sum and average
var n = 10;
var OneToN = [];
var sum = 0;
var average;

// FIRST N NUMBER
for (var i = 1; i <= n; i++) {
    OneToN.push(i);
}

console.log(OneToN);

// SUM OF SERIE
for (var i = 0; i < OneToN.length; i++) {
    sum = sum + OneToN[i];
}

console.log("Somma dei primi " + n + " numeri è " + sum);

// AVERAGE
average = sum / n;

console.log("La media dei primi " + n + " numeri è " + average);
