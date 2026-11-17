class TestRunner{
    static totaltests=0;
    static passCount=0;

    constructor(name, passed){
        this.name=name;
        TestRunner.totaltests++;
        if(passed){
            TestRunner.passCount++;
        }
    }

}

let t1= new TestRunner("LoginTest", true);
let t2= new TestRunner("DashboardTest", false);
let t3= new TestRunner("signupTest", true);
let t4= new TestRunner("SupportTest", true);
console.log(TestRunner.totaltests);
console.log(TestRunner.passCount);

console.log(t1.name);
console.log(t2.name);
console.log(t3.name);
console.log(t4.name);

