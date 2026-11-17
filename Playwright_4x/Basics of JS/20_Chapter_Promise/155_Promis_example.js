let apicall= new Promise(function(resolve, reject){
    resolve({status:200, body:"User data"});

});

apicall.then(function(response){
    console.log(response);
})


//resolve reject
let testRun= new Promise(function(resolve, reject){
   //resolve("Assertion passed");
    reject("Assertion failed");
});

testRun.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});