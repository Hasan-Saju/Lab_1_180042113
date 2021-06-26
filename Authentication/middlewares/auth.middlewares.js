const db = require('./../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const alert = require('alert');

const registration = (req,res,next) => {
    
    const { name,mail,password1,password2 } = req.body;
    console.log(name);

    db.query('select mail from auth where mail =?',[mail], async(error,results)=>{
        if(error)
        {
            console.log(error);
        }
        if(results.length>0)
        {
            console.log("Email is already in use.");
            alert("<h1>Email is already in use.</h1>");
            // res.redirect("/");

        }
        else if(password1!=password2)
        {
            console.log("Passwords don't match.");
            alert("<h1>Passwords don't match.</h1>");
            // res.redirect("/");
            
        }
        let hashedPassword = await bcrypt.hash(password1,8);
        console.log(hashedPassword);

        db.query('insert into auth set ?',{mail:mail,full_name:name,password:hashedPassword},(error,results)=>{
            if(error)
            {
                console.log(error);
                res.end();
            }
            else
            {
                console.log(results);
                console.log("User registration successful.");
                next();
            }

        });

    });

}

module.exports = {registration};