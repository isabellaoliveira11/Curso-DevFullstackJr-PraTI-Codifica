const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite o primeiro valor: "));
let num2 = parseInt(prompt("Digite o segundo valor: "));

if (num < num2) {
    console.log("Ordem crescente: " + num + ", " + num2);
} else {
    console.log("Ordem crescente: " + num2 + ", " + num);
}
