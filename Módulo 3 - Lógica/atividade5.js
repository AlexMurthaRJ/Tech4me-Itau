const prompt = require("prompt-sync")();

var preco = prompt("Qual o preço da gasolina?");
var arredondado = parseFloat(preco).toFixed(3);
console.log("O preço da gasolina é R$", arredondado)