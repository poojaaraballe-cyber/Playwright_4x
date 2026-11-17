class BaseTest{
    setUp(){
        console.log("Base: Open Browser");

     
    }
}

class APITest extends BaseTest{
    setUp(){
        console.log("API TEST running");
    }
}


let test1= new APITest();
test1.setUp();