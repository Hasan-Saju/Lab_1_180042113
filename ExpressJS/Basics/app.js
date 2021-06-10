// app creation
const express = require('express');
const app = express(); 
const userRoutes = require("./routes/userRoutes.routes");


// using user routes
// app.use(userRoutes); //kono special url nai
app.use("/users/",userRoutes);



// handing base url
app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.send("<h1>Home Page - GET Request</h1>");
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