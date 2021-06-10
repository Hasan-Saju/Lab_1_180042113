// app creation
const express = require('express');
const app = express(); 

// handing base url
app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.send("<h1>Home Page - GET Request</h1>");
});

app.post("/",(req,res)=>{
    res.status(201).send("<h1>Home Page - POST Request</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>");
});

app.use((req,res)=>{
    res.status(401).send("Page doesn't exist.");
});

module.exports = app;