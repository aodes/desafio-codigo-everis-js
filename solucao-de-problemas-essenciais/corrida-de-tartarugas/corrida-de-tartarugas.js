let valor = parseInt(gets()); // Linha 1
let maior = 1;
let contador = 0;

while (!Number.isNaN(valor)) {

   array = gets().split(" "); // Linha 2 // linha 4 // linha6
   array.sort(function(a,b){
      return a - b;
   });

   maior = array.pop();

   if (maior < 10) {
      console.log('1')
   } else if (maior >= 10 && maior < 20) {
      console.log('2')
   } else if (maior >= 20) {
      console.log('3')
   }

   // Executou 1x // executou 2x // executou 3x

   valor = parseInt(gets()); // Linha 3 // linha 5 // linha 7
}