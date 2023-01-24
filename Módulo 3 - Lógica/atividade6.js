const prompt = require("prompt-sync")();

var total_venda = prompt("Digite o valor da venda: ");
var troco = prompt("Digite o valor recebido: ");

var arredondado_venda = Math.round(total_venda);
valorfinal_venda = parseFloat(arredondado_venda).toFixed(2);

var arredondado_troco = Math.round(troco);
valorfinal_troco = parseFloat(arredondado_troco).toFixed(2);


console.log("O valor total é: R$", valorfinal_venda);
console.log("O valor recebido foi de R$", valorfinal_troco);

