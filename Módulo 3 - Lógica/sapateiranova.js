const prompt = require("prompt-sync")();

const sapatos = [];

sapatos[0] = "";
sapatos[1] = "Tênis Nike";
sapatos[2] = "Tênis Allstar";
sapatos[3] = "Bota cano alto";
sapatos[4] = "Crocs papete";
sapatos[5] = "Sandalia da Melissa";

console.log("== App Sapateira ==");
var espaco = prompt("Digite o número do espaço: ");
var indice = parseInt(espaco);
const resposta = sapatos[indice];
console.log("Neste espaço está o", resposta);
