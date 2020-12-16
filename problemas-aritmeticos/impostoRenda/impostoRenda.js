let salario = parseFloat(gets());
let valor = 0.0;

if(salario <= 2000.00){
    console.log('Isento'); 
}else if(salario > 2000.00 && salario <= 3000.00 ){
    valor = (salario - 2000) * 0.08
    console.log(`R$ ${valor.toFixed(2)}`)
}else if(salario > 3000.00 && salario <= 4500.00){
    valor = ((salario - 3000) * 0.18) + 80
    console.log(`R$ ${valor.toFixed(2)}`)
}else if(salario > 4500.00){
    valor = ((salario - 4500) * 0.28) + 350 
    console.log(`R$ ${valor.toFixed(2)}`)
}
