const prompt = require("prompt-sync")();

var amigos = 0;
var total = 0;

function numero(i) {
    switch (i) {
        case 1: return "UM";
        case 2: return "DOIS";
        case 3: return "TRÊS";
        case 4: return "QUATRO";
    }
    
}

while (amigos < 4) {
    amigos++;
    console.log("Amigo", numero(amigos), "quanto?");
    var texto = prompt("");
    var aposta = parseFloat(texto);
    total += aposta;

}

console.log("O vencedor vai faturar R$", total)