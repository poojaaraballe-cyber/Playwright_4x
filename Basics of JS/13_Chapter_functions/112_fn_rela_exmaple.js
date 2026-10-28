function statusvalidationcode(status){

    if(status >=200 && status <=300){
        console.log("request is fine");
    }
}


const functionexpstatuscode = function(status1){
    if(status1 >=200 && status1 <=300){
        console.log("request is fine");
    }
}

const functionArrowStatuscode= (status2)=> {
if(status2 >=200 && status2 <=300){
        console.log("request is fine");
    }

}
statusvalidationcode(200);
functionexpstatuscode(201);
functionArrowStatuscode(201);