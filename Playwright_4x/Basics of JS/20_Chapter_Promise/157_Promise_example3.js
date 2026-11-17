function opeBrowser(){
    return new Promise(function(resolve){
        resolve('Browser Opened');
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

opeBrowser()
.then(function(response){
    console.log("Step 1", response);
    return goToLogin(); 
    }).then(function(response){
        console.log("Step 2", response);
        return enterCredentials();
    }).then(function(response){
        console.log("Step 3", response);
        return clickLogin();
    }).then(function(response){
        console.log("Step 4", response);
    }).catch(function(error){
        console.log("Error", error);
    }).finally(function(){
        console.log("I execute always");
    });
