//const prompt = require("prompt-sync")();

MG = "Minas Gerais";
RJ = "Rio de Janeiro";
SP = "São Paulo";
ES = "Espirito Santo"


//var siglaEstado = prompt("Digite a sigla de um estado do Sudeste: ");
var siglaEstado = "Rj";
var estado;

switch(siglaEstado){
    case 'MG': estado = MG; break;
    case 'RJ': estado = RJ; break;
    case 'SP': estado = SP; break;
    case 'ES': estado = ES; break;
    case 'mg': estado = MG; break;
    case 'rj': estado = RJ; break;
    case 'sp': estado = SP; break;
    case 'es': estado = ES; break;
    case 'Mg': estado = MG; break;
    case 'Rj': estado = RJ; break;
    case 'Sp': estado = SP; break;
    case 'Es': estado = ES; break;
};
console.log(estado)

