let qtdAlunos = parseInt(gets());
let matricula = 0;
let nota = 0.0;

for (let index = 0; index <= qtdAlunos; index++) {
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseFloat(line[1]);
    if(nota < Y){
        nota = Y;
        matricula = X;
    }   
}

if(nota >= 8 ){
    console.log(matricula)
}else{
    console.log('Minimum note not reached')
}