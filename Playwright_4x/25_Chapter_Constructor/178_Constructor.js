class Bad{
    constructor(a){
        console.log("this is 1st constructor");
    }

    constructor(b){
        console.log("this is 2nd constructor");
    }
}//JS can have only one conctructor per class


let b1= new Bad();
console.log(b1);