let fastserver= new Promise(function(resolve){
    setTimeout(function(){
        resolve("Fast server is responding in 1000ms");
    }), 1000
});

let slowserver= new Promise(function(resolve){
    setTimeout(function(){
        resolve("Slow server is responding in 2000ms");
    }), 2000
});


Promise.race([fastserver, slowserver]).then(function(value){
    console.log("Winner :",value);
});