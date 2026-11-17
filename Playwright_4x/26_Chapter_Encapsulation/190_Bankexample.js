class ICICI{

    #balance

    constructor(name, balance){
        this.#balance=balance;
        this.name=name;
    }


    getbalance(){
        return this.#balance;
    }

    setbalance(balance, iscashier){
        if(iscashier){
            this.#balance=balance;

        }else{
            console.log("Not allowed");
        }
    }
}


let pooja= new ICICI("Pooja", 1000);
console.log(pooja.getbalance());
pooja.setbalance(2000, false);
console.log(pooja.getbalance())

let guddi= new ICICI("Guddi", 1000);
console.log(guddi.getbalance());
pooja.setbalance(2000, true);
console.log(pooja.getbalance())
