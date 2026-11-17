let a =10;
class TestRunner{
    static totaltests=0;
    static passCount=0;

    constructor(name, passed){
        this.name=name;

        TestRunner.totaltests++;
        if(passed){
            TestRunner.passCount++;
        }
        console.log(a);
    }
    //non static function
    fnc(){
        return this.name;
    }

    //static function
    static summary(){
        return TestRunner.passCount + "/" + TestRunner.totaltests +" passed";
    }

}


new TestRunner("Login", true);
new TestRunner("Signup", true)
new TestRunner("cart", false)
new TestRunner("payment", true)

console.log(TestRunner.summary());