let vinho = parseInt(gets());
let respostas = gets().split(" ");
let contador = 0;

for (let index = 0; index < respostas.length; index++) {

    if (vinho == respostas[index]) {
        contador = contador + 1;
    }
}
console.log(contador)
