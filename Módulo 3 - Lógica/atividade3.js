var idade = 17
var sexo = "m"

var idade_masc = 18
var idade_fem = 21

const emancipado = (sexo == 'm' && idade >= idade_masc) || (sexo == 'f' && idade >= idade_fem)
console.log('Sou emancipado?' , emancipado)

if (emancipado) console.log('Você já é emancipado, porque já tem ', idade, ' anos');
if (!emancipado) console.log('Você ainda não é emancipado, porque não tem ', idade_masc, ' anos');