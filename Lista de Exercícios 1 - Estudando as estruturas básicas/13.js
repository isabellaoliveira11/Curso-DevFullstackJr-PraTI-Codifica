const prompt = require('prompt-sync')();
let soma = 0;
let contador = 0;
let num;
do {
    num = parseFloat(prompt("Digite um número decimal (0 para sair): "));
    if (num !== 0) {
        soma += num;
        contador++;
    }
} while (num !== 0);
if (contador > 0) {
    let media = soma / contador;
    console.log("A média aritmética dos números digitados é: " + media);
}