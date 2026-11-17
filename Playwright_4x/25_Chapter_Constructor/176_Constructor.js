class Credentials{

    #apikey;
    constructor(user, key){
        this.user= user;
        this.#apikey=key;
    }

     getAuthHeader() {
            return "Bearer " + this.#apikey;
        }


}


let cred= new Credentials("admin", "#453secret");
console.log(cred.user);
console.log(cred.getAuthHeader);
