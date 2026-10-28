function startBrowser(){
    let name = "edge";

    function installBroser(){
        console.log(name);
    }

    return installBroser;
}
const runtc= startBrowser();
runtc();

