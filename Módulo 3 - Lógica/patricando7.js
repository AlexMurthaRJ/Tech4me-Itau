const prompt = require("prompt-sync")();

console.log("-- Rádio Tech4FM --");

const logo = "Tech4FM e show";

var acertou = true;

while(acertou){
    var sorteado = Math.random();
    sorteado = Math.floor(sorteado * 14) +1;
    console.log("Número sorteador:", sorteado);
    
    var resposta = prompt("Não diga alô, diga" + logo + "!");
    
    if (resposta == logo) {console.log("Parabéns, ganhou a camiseta!");
        acertou = false;}
    else {console.log("Que pena, frase errada...");
        acertou = true};
}
