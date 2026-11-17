class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name , "is eating");

    }
    sleep(){
        console.log(this.name , "is sleeping");
        
    }
    foo(){
        console.log(this.name , "is fooing");
        
    }
}


class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed=breed;
    }
    bark(){
        super.foo();
        console.log(this.name, "is Barking");
    }
}


let dog = new Dog("Rex", "Lab");
dog.eat();
dog.bark();
dog.sleep();
console.log(dog.breed);