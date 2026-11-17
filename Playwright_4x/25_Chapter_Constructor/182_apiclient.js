class APIClient{
    constructor(baseURL){
        this.baseUrL=baseURL;
    }

    get(path){
        return this.baseUrL + path;
    }
}


let staging= new APIClient("https://staging.api.com");
let prod= new APIClient("https://prod.api.com");

console.log(staging.get("/staging/users"));
console.log(prod.get("/prod/users"));
