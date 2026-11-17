let apicall= new Promise(function(resolve, reject){
    resolve({sucess: "Pass"});
    //reject({failure: Failed})

    });

    apicall.then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    }).finally(function(){
        console.log("I execute always");
    });