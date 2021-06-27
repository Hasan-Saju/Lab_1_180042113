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
        else if(cookies.substring(0,8)=="username")
        {

            function isCharacterALetter(char) {
                return (/[a-zA-Z]/).test(char);
              }
            var userName="";
            for(var i=9;i<cookies.length;i++)
            {
                if(isCharacterALetter(cookies[i]))
                {
                    userName=userName+cookies[i];
                }
                if(cookies[i]=='0')
                userName=userName+' ';
            }
            alert("Welcome "+userName);
            client=userName;
            res.clearCookie(cookies);
            next();
            // change
            // return res.render("/dashboard",{
            //     client:userName
            // });
        }
        else
        {
            alert("Login with your credentials");
            res.redirect("/login");
        }
        
    
}

module.exports = {isLoggedIn}