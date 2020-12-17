// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let R = parseInt(gets()); //3
let V = parseInt(gets()); //20
let sum = 0;
let meter = 0;
let valid = 0;

while(R >= V){
  V = parseInt(gets());
}

meter = 1;
sum = R;
valid = R;

while(valid <= V){
    meter = meter + 1;
    sum = sum + 1;
    valid = valid + sum;
}

console.log(meter)

// meter:2 : meter:1 + 1
// sum:4 = sum:3 + 1
// valid:7 = valid:3 + sum:4

// meter:3 : meter:2 + 1
// sum:5 = sum:4 + 1
// valid:12 = valid:7 + sum:5

// meter:4 : meter:3 + 1
// sum:6 = sum:5 + 1
// valid:18 = valid:12 + sum:6

// meter:5 : meter:4 + 1
// sum:7 = sum:6 + 1
// valid:25 = valid:18 + sum:7
