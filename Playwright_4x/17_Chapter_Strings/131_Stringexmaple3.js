let url= "https://reqres.in/api/users?page=2";

console.log(url.includes("reqres"));
console.log(url.includes("mickey"));


console.log(url.startsWith("https"));
console.log(url.startsWith("http"));
console.log(url.endsWith("=2"));


console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("//req"));
console.log(url.indexOf("random"));//if not present then -1 is displayed
