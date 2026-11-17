class Person{

    #child1;
    #child2;
    constructor(name, child1, child2 ){
        this.name=name;
        this.#child1=child1;
        this.#child2=child2;

    }

    getChild(){
        return this.#child1;
    }

    setChild(changed_name){
        this.#child1=changed_name;
    }
}

let p= new Person("Pooja", "Akshara", "Shivam");
//console.log(p.#child1);//cannot be accessed outside class because its private


console.log(p.getChild());
p.setChild("Aksharaaaa");
console.log(p.getChild());

