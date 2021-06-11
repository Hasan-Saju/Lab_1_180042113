// app creation
const express = require('express');
const app = express(); 
const userRoutes = require("./routes/userRoutes.routes");


// req -> middleware -> response 
/* //will transfer into middlewares file
const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const date = new Date().getFullYear().toString();

    // req.name="saju";  //can even change the request from middleware
    console.log(method, url, date);        
    // res.send("<h1>Testing Middleware</h1>");

    next(); //middleware run er por app.get("/") er baki tuku run hobe
}
*/
//app.use(logger); //shob gula route a middleware ta use hobe, router moddhe ar dewa lagbe na

// using user routes
app.use(userRoutes); //kono special url nai
// app.use("/users/",userRoutes); //ei file er shob url er sathe users add 

const {logger,printSomething} = require("./middlewares/app.middlewares");
app.use([logger,printSomething]);

// handing base url
// app.get("/",logger,(req,res)=>{ 
app.get("/",(req,res)=>{         //middleware added in base url 
    // res.statusCode = 200;
    // res.send("<h1>Home Page - GET Request</h1>");
    res.sendFile("home.html",{root:"./views"});
});

app.post("/",(req,res)=>{
    res.status(201).send("<h1>Home Page - POST Request</h1>");
});

app.get("/about",(req,res)=>{
    // res.cookie("username","saju");  //key-value pair hishebe store
    // res.clearCookie("username");
    res.append("id","180042113"); //cookie through header
    res.send("<h1>About Page</h1>");
});

app.get("/contact",(req,res)=>{
    res.json({name:"John Reese",profession:"N/A"});
    // res.send("<h1>Contact Page</h1>");
});

app.use((req,res)=>{
    res.status(401).send("Page doesn't exist.");
});

module.exports = app;