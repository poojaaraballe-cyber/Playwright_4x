class Car{
     #engine;
     constructor(name, engine){
        this.name=name;
        this.#engine=engine;
     }

     setEngine(nameEngine){
        this.#engine=nameEngine;

     }

     getEngine(){
        return this.#engine
     }
}


let tesla= new Car("Tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine("V8engine-new");
console.log(tesla.getEngine());
