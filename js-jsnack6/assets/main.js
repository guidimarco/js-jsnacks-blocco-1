// POWER OF 2
var powerOf2 = [];
// control var
var powerOf2StepI = 0;

for (var i = 0; powerOf2StepI < 1000; i++) {
    powerOf2StepI = Math.pow(2, i);
    if (powerOf2StepI < 1000) {
        powerOf2.push(powerOf2StepI);
        console.log("2 alla " + i + " è uguale a " + powerOf2StepI);
    }
}

console.log(powerOf2);
