const prompt = require("prompt-sync")();

var sanduiche = "";
var pedido = "";
var acompanhamento = [];
var valorAcompanhamento = 2.00;
var acabar = "concluir";
var pedidoQtde = 0;

sanduiche = prompt("Qual sanduíche você deseja?");

while(pedidoQtde < 5){
    var pedido = prompt("Qual acompanhamento deseja adicionar? Caso não deseje mais nenhum digite 'concluir'. ");

    if (pedido == acabar){
        console.log("Pedido finalizado!")
        break 
    }
    else acompanhamento.push(pedido);
         pedidoQtde++;
};
var valorPedido = pedidoQtde * valorAcompanhamento

if (pedidoQtde = 5) console.log("Pedido finalizado!");

console.log("=== Dados do Pedido ===")
console.log("=== Sanduiche Solicitado: ", sanduiche,"===")
console.log("=== Acompanhamento Solicitados: ", acompanhamento,"===")
console.log("=== Valor total dos acompanhamentos: ", valorPedido,"===")