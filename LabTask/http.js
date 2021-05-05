const http=require("http");
const importedHtml=require('./loadContent');

const server=http.createServer((req,res)=>{
    
    if(req.url=="/")
    {
        res.write(importedHtml.html.index);
        res.end();
    }
    else if(req.url=="/about")
    {
        res.write(importedHtml.html.about);
        res.end();   
    }
    else if(req.url=="/blog")
    {
        res.write(importedHtml.html.blog);
        res.end();   
    }
    else if(req.url=="/contact")
    {
        res.write(importedHtml.html.contact);
        res.end();   
    }
    else if(req.url=="/pricing")
    {
        res.write(importedHtml.html.pricing);
        res.end();   
    }
    else if(req.url=="/services")
    {
        res.write(importedHtml.html.services);
        res.end();   
    }
    else if(req.url="/work")
    {
        res.write(importedHtml.html.work);
        res.end();   
    }
    else
    {
        res.write("<h1>Page doesn't exist.</h1><br><a href="/">Return to Home Page</a>");
        res.end();   
    }
});

module.exports={server};