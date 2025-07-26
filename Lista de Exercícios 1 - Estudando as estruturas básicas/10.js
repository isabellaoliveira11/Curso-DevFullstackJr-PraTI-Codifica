const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite o primeiro valor: "));

for (let i = 1; i <= 10; i++) {
console.log(i + " - " + num);
}