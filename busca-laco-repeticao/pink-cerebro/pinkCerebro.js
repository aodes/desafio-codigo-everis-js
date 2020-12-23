let qtdNumero = parseInt(gets());
let numeros = gets().split(" ");
let multiplos = [2, 3, 4, 5];

for (let index = 0; index < multiplos.length; index++) {

    let contador = 0;
    let multiplo = multiplos[index];

    for (let index = 0; index < numeros.length; index++) {
        let numero = numeros[index];

        if(numero % multiplo == 0 ){
            contador = contador + 1;
        }
    }
    console.log(contador + " Multiplo(s) de " + multiplo)
}