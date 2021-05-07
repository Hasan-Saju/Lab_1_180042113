const fs=require("fs");
// const { builtinModules } = require("node:module");

var htmlFiles=["index.html","about.html","blog.html","contact.html","pricing.html","services.html","work.html"];
var readData=[];

for(var i=0;i<htmlFiles.length;i++)
{
    path="./HTML/"+htmlFiles[i];
    data=fs.readFileSync(path,"utf-8");
    readData.push(data);
}

// console.log(data);

html={
    "index":readData[0],
    "about":readData[1],
    "blog":readData[2],
    "contact":readData[3],
    "pricing":readData[4],
    "services":readData[5],
    "work":readData[6]
}
// console.log(html.work);
module.exports={html};