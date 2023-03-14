const prompt = require("prompt-sync")();

var chamada = [];
const vazio = ""

while(presenca != vazio){
    var presenca = prompt("Aluno: ");
    if(presenca == vazio){
        break
    } else chamada.push(presenca)
}

console.log(chamada)