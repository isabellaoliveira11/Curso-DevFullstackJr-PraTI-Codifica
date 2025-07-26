const prompt = require('prompt-sync')();

let quantidade = parseInt(prompt("Digite o número de maçãs: "));
let precoUnitario;

if (quantidade >= 12) {
    precoUnitario = 0.25;
} else {
    precoUnitario = 0.30;
}

let total = precoUnitario * quantidade;
console.log("Valor total da compra: R$ " + total.toFixed(2));
