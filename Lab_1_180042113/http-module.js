// importing http module
const http=require("http");

// creating server
const server=http.createServer((req,res)=>{
    // console.log(req);
    // res.writeHead(201,{"Content-Type":"text/plain"});
    // res.write("<h1>Hello</h1>");
    // res.end();
    //res.end("<h1>Hello</h1>");

    if(req.url=="/")
    {
        res.write("<h1>This is base URL</h1>");
        res.end();
    }
    else if(req.url=="/home")
    {
        res.write("<h1>This is home Page</h1>");
        res.end();
    }
    else
    {
        res.write(
            "<h1>This is page doesn't exist.</h1> <br><a href='/'>Go to base</a>");
        res.end();
    }

});


module.exports={server};
// server.listen(7777);
// localhost:7777 or 127.0.0.1:7777
