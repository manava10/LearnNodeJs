const fs = require("fs");
//SyncWriteinFile
fs.writeFileSync("./testSync.txt","Hey there");

//Async write in file
fs.writeFile('./testAsync.txt',"Hey, There Please write all thing in async file",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("We have written the  data in file asynchronously!");
    }
})
//Read File synchronously
const filedata = fs.readFileSync("./testAsync.txt","utf-8");
console.log(filedata);

//Read File Asynchrounously

fs.readFile("./testSync.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("We have read the file async")
        console.log(data);
    }
})


