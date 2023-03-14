const carros = [
    {
        aluno:"Alex",
        montadora:"Mitsubishi",
        modelo: "Lancer Evolution",
        cor: "vermelho"
    },
    {
        aluno:"Pedro",
        montadora:"Mitsubishi",
        modelo: "Lancer GT",
        cor: "preto"
    },
    {
        aluno:"Miguel",
        montadora:"Toyota",
        modelo: "Supra",
        cor: "verde"
    }
];

const callback = function(carro){
    console.log(carro.modelo)
};

//carros.forEach(callback);

const cb = function(item){
    return  item.montadora
};

const listaNova = carros.map(cb);

console.log(listaNova)