var express = require('express');
var app = express();
var cookieParser = require("cookie-parser");
const alert = require("alert")

app.use(cookieParser());

const isLoggedIn = (req,res,next) =>{

        // console.log("middleware");
        const cookies = req.headers.cookie;
        console.log(cookies);
        // console.log(typeof(cookies))
        // console.log(req);
        if(cookies==undefined)
        {
            alert("Login with your credentials");
            res.redirect("/login");
        }
        else if(cookies.substring(0,8)=="usermail")
        {
            next();
        }
        else
        {
            alert("Login with your credentials");
            res.redirect("/login");
        }
        
    
}

module.exports = {isLoggedIn}