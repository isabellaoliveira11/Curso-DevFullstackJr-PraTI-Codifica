// 11. Faça um programa que leia 5 números inteiros e mostre a soma deles.
const prompt = require('prompt-sync')();
let num = parseInt(prompt("Digite um número para ver a tabuada: "));
console.log("Tabuada do " + num + ":"); 
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}