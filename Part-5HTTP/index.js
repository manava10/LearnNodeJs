const http = require("http");
const fs = require("fs");
const url = require("url"); //This is to extract all the things from a url

const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico"){
        return res.end();
    }
    const log = `${Date.now()} ${req.url} : New Req Recieved\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("./log.txt",log,(err)=>{
        if(err){
            console.log(err)
        }
    })
    switch(myUrl.pathname){
        case "/": res.end("HomePage");
        break;
        case "/about": res.end("THis is the about page of the server");
        break;
        default: res.end("404");
    }
    console.log("New request received");
});

const port = 7393;

myServer.listen(port,()=>{
    console.log("Server Started");
})