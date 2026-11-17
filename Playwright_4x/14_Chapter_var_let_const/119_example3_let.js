let a=10;
console.log(a);

function printHeloo() {
    console.log("Inside function body");
    let a = 20;
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log(a);
}

printHeloo();

//var is function scoped
//let is block scoped
