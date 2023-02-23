const aluno = {
    nome: "Alex",
    sobrenome:"Murtha",
    nomeCompleto: function nomeCompleto(nome, sobrenome){
        return nome + " " + sobrenome
    },
};

console.log(aluno.nomeCompleto("Alex", "Murtha"));
console.log(aluno.nome);
console.log(aluno.sobrenome);