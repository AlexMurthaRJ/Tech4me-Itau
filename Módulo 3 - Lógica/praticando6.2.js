const prompt = require("prompt-sync")();

function multiplicar(fator, fator2) {
    var multi = fator * fator2;
    return multi
}

var resposta = multiplicar(2, 2);

console.log(resposta)