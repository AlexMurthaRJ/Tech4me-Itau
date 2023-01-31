const prompt = require("prompt-sync")();

function ibovespa(nick, valor_acao, qtd_acoes){
    console.log("Ações de", nick);
    return valor_acao * qtd_acoes;
}

var gasto = ibovespa("PETR4", 26.30, 200);
console.log("Você pagará", gasto, "para sua corretora");

