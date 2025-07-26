const prompt = require('prompt-sync')();

let A = parseFloat(prompt("Digite o valor de A: "));
let B = parseFloat(prompt("Digite o valor de B: "));
let C = parseFloat(prompt("Digite o valor de C: "));
    
if (A + B > C && A + C > B && B + C > A) {
    console.log("Os valores formam um triângulo.");
    
    if (A == B && B == C) {
        console.log("Triângulo equilátero.");
    } else if (A == B || A == C || B == C) {
        console.log("Triângulo isósceles.");
    } else {
        console.log("Triângulo escaleno.");
    }
} else {
    console.log("Os valores não formam um triângulo.");
}