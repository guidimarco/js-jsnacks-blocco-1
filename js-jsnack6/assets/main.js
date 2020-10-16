// <1-fold --- VERSION 1.0 --- with array
// // POWER OF 2
// var powerOf2 = [];
// // control var
// var powerOf2StepI = 0;
//
// for (var i = 0; powerOf2StepI < 1000; i++) {
//     powerOf2StepI = Math.pow(2, i);
//     if (powerOf2StepI < 1000) {
//         powerOf2.push(powerOf2StepI);
//         console.log("2 alla " + i + " è uguale a " + powerOf2StepI);
//     }
// }
//
// console.log(powerOf2);
// </1-fold

// <1-fold --- VERSION 2.0 --- without array
// POWER OF 2
// control var
var powerOf2StepI = 0;

for (var i = 0; powerOf2StepI < 1000; i++) {
    powerOf2StepI = Math.pow(2, i);
    if (powerOf2StepI < 1000) {
        console.log("2 alla " + i + " è uguale a " + powerOf2StepI);
    }
}
// </1-fold
