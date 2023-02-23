const prompt = require("prompt-sync")();

const certa = "encadeamento"

for (let i = 0; i < 3; i++){
console.log("Ouvinte", i + 1);
var vidas = 2;
var resposta = "";

   do{
     resposta = prompt("Que nome se da a um if dentro do outro?");

    if (resposta == certa){
        console.log("Parabéns ganhou a caneca!")
    } else {
       vidas--;
    }

   }
   while(resposta !== certa && vidas > 0);

   if (resposta !== certa) console.log("Desperdiçou sua chance.")
}

console.log("Obrigado a todos que participaram!")

