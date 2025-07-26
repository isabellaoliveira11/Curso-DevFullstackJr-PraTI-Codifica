const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite uma nota: "));

if (nota == 10) {
  console.log("Aprovado com louvor");
} else if (nota >= 6) {

  console.log("Aprovado");
} else {
    
  console.log("Reprovado");
}
