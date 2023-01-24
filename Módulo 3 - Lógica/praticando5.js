const prompt = require("prompt-sync")();

var vogal = "A";

var nome = prompt("Digite seu nome: ");
var nome_inicial = nome.substring(0, 1);

var dia = "";

if(nome_inicial == vogal) dia = "Segunda-Feira";
else dia = "Terça-Feira"


console.log("Sua entrevista será na ", dia);