class TestCase {
    #status = "Not run";

    static #count = 0;
    constructor(name) {
        this.name = name;
        TestCase.#count++;
    }

    run(pass) {
        this.#status = pass ? "Passed" : "FAILED";

    }

    getstatus() {
        return this.#status;
    }

    static getCount() {
        return TestCase.#count;
    }

    static setCount(v) {
        TestCase.#count = v;
    }
}


const tc= new TestCase("Login");
tc.run(false);
console.log(tc.getstatus());
new TestCase("login");
new TestCase("login");
new TestCase("login");
console.log(TestCase.getCount());