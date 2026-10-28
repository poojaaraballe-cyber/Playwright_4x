var a=10;
console.log(a);

function printHeloo() {
    console.log("Inside function body");
    var a = 20;
    console.log(a);
    if (true) {
        a = 30;
        console.log(a);
    }
    console.log(a);
}

printHeloo();