let line = gets().split("");
let resposta = '';

line.reverse();

for (let index = 0; index < line.length; index++) {
    resposta = resposta + line[index];
}
console.log(resposta)
