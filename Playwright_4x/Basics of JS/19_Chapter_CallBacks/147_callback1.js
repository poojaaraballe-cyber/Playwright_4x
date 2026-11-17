function placeorder(item, callbackk){
    console.log("placing an order");
    console.log("order placed", item);
    callbackk();
}

//first way 
placeorder("pizza", function() {
    console.log("order confirmed the anonymous function way");
});


//second way 
function print(){
    console.log("order confirmed1");
}

placeorder("pizza", print);

//third way:
placeorder("burger" , ()=> {
console.log("Arrow function ");
});

