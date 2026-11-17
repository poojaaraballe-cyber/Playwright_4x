//multiline

const getreults= (score) => {
    if(score > 70) return "pas";
    return "fail";
}

console.log(getreults(45));
console.log(getreults(87));