let scores= [
    [10,12,45],
    [23,45,90],
    [12,10,65]
];


let rowSum = scores.map(row=> row.reduce((a,b)=>a+b));
console.log(rowSum);
