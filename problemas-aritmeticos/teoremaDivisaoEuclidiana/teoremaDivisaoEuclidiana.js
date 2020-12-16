let line = gets().split(" ");
let a = parseFloat(line[0]);
let b = parseFloat(line[1]);
let q = a / b;
let r = a % b;

if(r < 0){
  r = r + Math.abs(b);
  q = (a - r ) / b;
}

console.log(q.toFixed(0) + " " + r.toFixed(0))
