class Student{
    static collegeName= "VTU";

    constructor(namee){
        this.name= namee;
    }

    static display(){
        console.log(this.name + "are part of" + Student.collegeName);
    }

    nsf(){
        console.log(this.name);
    }

}


let Amar= new Student("Amar");
let Sangeetha= new Student("Sangeetha");
let Tara= new Student("Tara");
let Jenny= new Student("Jenny");

console.log(Student.collegeName);
console.log(Amar.name);
console.log(Jenny.name);
