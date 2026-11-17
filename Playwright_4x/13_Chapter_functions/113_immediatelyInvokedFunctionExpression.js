
function name1(){
    console.log("hi");
}
name1();


//IIFE

(function(){
    console.log("Anonymous");
})();

(function(){
    console.log("Setup starts");
})();

(function(){
    console.log("Setup in between");
})();

(()=>{
    console.log("Setup end");
})();