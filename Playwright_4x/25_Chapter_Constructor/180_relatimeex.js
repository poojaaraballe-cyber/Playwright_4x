class TestCase{
    constructor(name, status, priority){
        this.name=name;
        this.status=status;
        this.priority=priority;
 }

        display(){
            console.log(this.name + ">" + this.status +">" + this.priority);
        }
   



}


let testlogin_ref= new TestCase("Login_Test", "PASS", "P0" );
let signup_ref= new TestCase("Signup_Test", "FAIL", "P2" );

testlogin_ref.display();
signup_ref.display();