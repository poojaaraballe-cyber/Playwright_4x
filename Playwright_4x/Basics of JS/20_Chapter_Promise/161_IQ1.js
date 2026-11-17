/* let p = new Promise(function(resolve, reject){

resolve(42);
});

p.then(function(value){
    console.log("Promise resolved with value:", value);
});

let r = new Promise(function(resolve, reject){

reject("broke");
});

r.catch(function(value1){
    console.log("caught:", value1);
});

//2

let mul= new Promise(function(val){
 return val*2;
}).then(function(val){
    console.log("Multiplied value:", val);
});

//3
let pe= Promise.resolve(5);
pe.then(function(value){
    return value*10;
}).then(function(value){
    console.log("Final value after multiplication:", value);
});


//4
Promise.resolve("start").then(function(val){
    console.log(val);
    throw new Error("Broker at step 2");

}); */

//4
Promise.resolve(1)
    .then(function(value){
        console.log(value);
        return value +1;
    })
    .then(function(value){
        console.log(value);
        return value +1;
    })
    .then(function(value){
        console.log(value);
       return value +1;
});

//5
Promise .resolve("start")
.then(function(val){
    console.log(val);
    throw new Error("Error at step 2");
}).then(function(){
    console.log("This will not run due to the error above");

}).catch(function(err){ 
console.log("caught:", err.message);

});


//6
Promise.reject("test failed")
    .then(function(data){
        console.log("Data:", data);
    })
    .catch(function(err){
        console.log("Error:", err);
    })
    .finally(function(){
        console.log("finally cleanup done");
    });
