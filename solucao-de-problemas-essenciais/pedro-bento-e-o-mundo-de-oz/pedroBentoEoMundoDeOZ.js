let string = gets();
let counter = 0;

var array = []

while(string != ""){

  if(array.includes(string)){

  }else{
    array.push(string);
    counter = counter + 1;
  }
  string = gets();
}

console.log(counter)
