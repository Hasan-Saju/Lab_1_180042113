// Synchronous and asynchronous Function

// readFile
// writeFile
// appendFile
// delete
// rename

const fs = require("fs");

// filename,content,callback
// callback need in asynchronous
fs.writeFileSync("./contents/demoFile.txt","We are learning NodeJS.");
fs.appendFileSync("./contents/demoFile.txt","We are learning Javascript.");

/*
// async
fs.rename("./contents/demoFile.txt","./contents/RenamedFile.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log("Rename Successful");
    }
});

fs.readFile("./contents/RenamedFile.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
});

*/


console.log("before");
fs.readFile("./contents/RenamedFile.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        fs.appendFile("./contents/RenamedFile.txt","This is a asynchronous process.",(err)=>{
            console.log(err);
        });
        fs.readFile("./contents/RenamedFile.txt","utf-8",(err,data)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(data);
            }
        });
    }
});

console.log("after");
