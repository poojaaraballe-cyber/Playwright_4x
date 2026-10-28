function getStatus(code){
if(code >=200 && code <300){
    return "Success";
}else if (code >=400 && code <500){
    return "client error";
}else(code >500)
    return "Client error";
}

console.log(getStatus(200));
console.log(getStatus(304));
console.log(getStatus(501));


