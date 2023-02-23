lista = [];

var carro = {
    aluno:"Alex",
    montadora:"Mitsubishi",
    modelo: "Lancer Evolution",
    cor: "vermelho"
};
lista.push(carro);

carro = {
    aluno:"Alex",
    montadora:"Mitsubishi",
    modelo: "Lancer GT",
    cor: "preto"
}
lista.push(carro);

carro = {
    aluno:"Alex",
    montadora:"Toyota",
    modelo: "Supra",
    cor: "verde"
}
lista.push(carro);

carro = {
    aluno:"Alex",
    montadora:"Tesla",
    modelo: "Model X",
    cor: "cinza"
}
lista.push(carro);

console.log(lista.length)

var cont = 0;

for( var i = 0; i < lista.length; i++){
    const item = lista[i];

    if(item.cor.toLowerCase() == "vermelho") cont++;
}

console.log("Total de vermelhos: ", cont);