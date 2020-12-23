let qtdNumero = parseFloat(gets());
let numeros = gets().split(/\s/g);
numeros = numeros.map((numeros) => parseFloat(numeros))
let menor = Number.MAX_VALUE;
let posicao = 0;

for (let index = 0; index < qtdNumero; index++) {

    if(menor > numeros[index]){
        menor = numeros[index]
        posicao = index;
    }
}
console.log('Menor valor: ' + menor)
console.log('Posicao: ' + posicao)
