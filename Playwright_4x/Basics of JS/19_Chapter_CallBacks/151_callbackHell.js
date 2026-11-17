function openBrowser(callback){
    console.log("opening the browser");
    setTimeout(function(){
        console.log("Browser opened");
           callback();
    }, 500);
}

function goToLoginPage(callback){
    console.log("opening the login page");
    setTimeout(function(){
        console.log("Login page loaded");
           callback();
    }, 500);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();
    }, 500);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 500);
}

//this is call back hell

openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("All steps completed!");
            });
        });
    });
});
