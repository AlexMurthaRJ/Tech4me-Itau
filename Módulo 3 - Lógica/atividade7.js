const prompt = require("prompt-sync")();

var nome = [];

while (nomeDigito != "") {
    var nomeDigito = prompt("Qual o nome do aluno? ")
    nome.push(nomeDigito);
}


console.log("A listagem de alunos é: ", nome)