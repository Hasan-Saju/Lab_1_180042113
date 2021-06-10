const express = require("express");
const router = express.Router();

router.get("/login",(req,res)=>{
    /*const id = req.query.id;
    const username = req.query.username; */
    // together
    const{id,username}=req.query;

    // res.send("This is Login Page");
    res.send(`user with ID - ${id} and Username - ${username} is requesting to login.`);
});

// accessing parameters from url
router.get("/dashboard/:id/:username",(req,res)=>{
    const id = req.params.id;
    const username = req.params.username;
    res.send(`user with ID - ${id} and Username - ${username} is requesting to access.`);
});

router.get("/register",(req,res)=>{
    // res.send("This is Register Page");
    //first param -> filename, 2nd ->path, root = from the location where project started
    res.sendFile("register.html",{root:"./views/users"});   
    
});

module.exports = router;