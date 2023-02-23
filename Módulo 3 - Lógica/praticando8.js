const prompt = require("prompt-sync")();

for (var contador = 0; contador < 10; contador++){
    var nome_ouvinte = prompt("Alo, quem esta falando? ");

    if(contador < 5){
        console.log("Parabens" , nome_ouvinte, "você ganhou um par de ingressos para o cinema!")
    }
    else{
        console.log("Infelizmente a promoção acabou, fique por dentro para novas oportunidade.")
    }
    
}

console.log("Parabens a todos os ganhadores e obrigado a todos os ouvintes.")