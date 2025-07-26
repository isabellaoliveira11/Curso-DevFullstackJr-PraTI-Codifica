const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Digite seu peso: "));
let altura = parseFloat(prompt("Digite sua altura: "));

if (peso <= 0 || altura <= 0) {
    console.log("Peso e altura devem ser maiores que zero.");
} else {      
    let imc = peso / (altura * altura);
    console.log("Seu IMC é: " + imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Baixo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}
