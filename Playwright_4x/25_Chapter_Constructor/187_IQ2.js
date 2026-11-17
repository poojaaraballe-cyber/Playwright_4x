let a =10;//this does not belong to class 
class Car{
    b; //this belongs to class and let or const is not required
    constructor(){
        console.log(a);
        this.b=this.b;
    }
}


let obk1= new Car();
let obk2= new Car();
