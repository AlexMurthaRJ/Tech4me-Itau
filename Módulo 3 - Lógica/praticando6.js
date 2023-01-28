const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");

function primeiraLetra() {
    var letra = nome.substring(0, 1);
    console.log("A primeira letra é", letra.toLowerCase());
}

primeiraLetra()