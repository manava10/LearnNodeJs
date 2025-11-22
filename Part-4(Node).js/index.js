const fs = require("fs");

//Blocking
fs.readFile("./test.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
const data = fs.readFileSync("./test1.txt","utf-8");
console.log(data);

//const os = require("os");
//console.log(os.cpus().length);
//This code shows max thread pool thread you can take.

//We can see the async code result printed later, but sync first.

//Default Thread Pool limit =>4