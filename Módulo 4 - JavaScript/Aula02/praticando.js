const promocaoPar = function (valor){
    return (valor * 30) /100;
};

const promocaoImpar = function (valor){
    return (valor * 35) /100;
};

const hoje = new Date();
const min = hoje.getMinutes();

var fn;

if (min %2 == 0) fn = promocaoPar;
else fn = promocaoImpar;

console.log(fn(11));