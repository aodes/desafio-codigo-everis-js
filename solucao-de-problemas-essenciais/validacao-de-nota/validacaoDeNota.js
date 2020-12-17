
let valid = 0;
let media = 0;
let soma = 0;

while(valid < 2){
  let nota = parseFloat(gets());
  if(nota < 0 || nota > 10){
    console.log('nota invalida')
  }else if(nota >= 0 && nota <= 10){
    valid = valid + 1;
    soma = soma + nota;
  }
  media = soma / 2;
}
console.log("media = " + media.toFixed(2))