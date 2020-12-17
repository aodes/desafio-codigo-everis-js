let valor = parseInt(gets());

for (let index = 0; index < valor; index++) {
    
    let numero = index + 1;
    let quadrado = Math.pow(numero , 2);
    let cubo = Math.pow(numero, 3);
    console.log(numero + " " + quadrado + " " + cubo)
}