class Father{
    eat(){
        console.log("I am eating");

    }


}

class Son extends Father{
    walk(){
        console.log("This is walking");
    }
}

const s = new Son();
s.walk();
s.eat();

const f= new Father();
f.walk();
f.eat();