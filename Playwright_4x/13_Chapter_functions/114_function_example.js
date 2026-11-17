function add(a, b,c){
    return a+b+c;
}

let num=[3,2,3,4];

console.log(add(...num));

function haserror(...codes){
    return codes.some(c => c>40);
}


 let responsecode= [50,34,12,56];
 let responsecodes1= [12,34,33,10];

  console.log(haserror(...responsecode));
  console.log(haserror(...responsecodes1));