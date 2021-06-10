const express = require("express");
const router = express.Router();

router.get("/login",(req,res)=>{
    res.send("This is Login Page");
});

router.get("/register",(req,res)=>{
    // res.send("This is Register Page");
    //first param -> filename, 2nd ->path, root = from the location where project started
    res.sendFile("register.html",{root:"./views/users"});   
    
});

module.exports = router;