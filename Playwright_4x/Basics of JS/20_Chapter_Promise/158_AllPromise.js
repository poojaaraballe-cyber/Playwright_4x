let checkAuth=Promise.resolve("User is authenticated");
let checkDB= Promise.resolve("Database is connected");
let checkcache= Promise.resolve("Cache is working");

Promise.all([checkAuth, checkDB, checkcache]).then(function(results){
    console.log("All promises are resolved", results);
});


Promise.all([
    Promise.reject("OK"),
    Promise.resolve("Database is connected"),
    Promise.resolve("Cache is working")

]). then (function(results){
    console.log("All promises are resolved", results);
}).catch(function(error){
    console.log("Error", error);
})


