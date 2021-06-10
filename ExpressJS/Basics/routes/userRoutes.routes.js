const express = require("express");
const router = express.Router();

router.get("/login",(req,res)=>{
    res.send("This is Login Page");
});

router.get("/register",(req,res)=>{
    res.send("This is Register Page");
});

module.exports = router;