class Browser{
    constructor(name){
        this.name=name;
        this.isOpen= true;
       console.log(name +"lanaunched");
    }

    startBrowser(){
        console.log("starting browswer");
    }

    closeBrowser(){
        console.log("Closing broswer");
    }
}

let chrome= new Browser("Chrome");
let firefox= new Browser("Firefox");

console.log(chrome.isOpen);
chrome.startBrowser();
chrome.closeBrowser();

