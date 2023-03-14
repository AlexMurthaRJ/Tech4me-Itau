const carros = ["uno","gol","palio","celta","clio"];

//for (var i = 0; i < carros.length; i++){
//    const item = carros[i];
//    console.log(item);
//}

//for (const carro of carros){
//    console.log('For..of', carro)
//}

function paraCadaItem(item){
    console.log(item);
}

carros.forEach(paraCadaItem);