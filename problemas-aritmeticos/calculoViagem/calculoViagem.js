let line = gets().split(" ");
let horas = parseInt(line[0]);
let velocidade = parseInt(line[1]);
let combustivel = (horas * velocidade) / 12;
console.log(combustivel.toFixed(3))