const prompt = require('prompt-sync')();

let saldo = 1000;

let opcao = parseInt(prompt("Escolha uma opção:\n1 - Ver saldo\n2 - Fazer depósito\n3 - Sair\n"));

switch (opcao) {
  case 1:
    console.log("Seu saldo é R$ " + saldo + ".");
    break;

  case 2:
    let deposito = parseFloat(prompt("Digite o valor do depósito: "));
    saldo += deposito;
    console.log("Depósito realizado com sucesso. Novo saldo: R$ " + saldo.toFixed(2));
    break;

  case 3:
    console.log("Saindo do sistema...");
    break;

  default:
    console.log("Opção inválida.");
    break;
}
