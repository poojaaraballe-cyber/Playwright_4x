function outer(){
const message = "This is outer function";

return function inner(){
    console.log(message);
}
}
const callingfn= outer();
callingfn();

//outer();-----since here outer holds the inner function it returns the inner 
// function which is nothign to print . 
// therefore we assign the outer to some variable. 
// that variable holds the inner function and when that variable is called indirectly 
// inner function is called as done in line 8 and 9.


