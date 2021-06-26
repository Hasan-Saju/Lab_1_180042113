const db = require('./../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const alert = require('alert');


const getRegister = (req,res) => {
    res.sendFile("register.html",{root:"./views/templates/AdminLTE-master/pages/examples"});   
};

const postRegister = (req,res) => {

    const { name,mail,password1,password2 } = req.body;
    console.log(name);

    db.query('select email from clients where email =?',[mail], async(error,results)=>{
        if(error)
        {
            console.log(error);
            alert("Error Occured.");
            res.redirect('/register');
        }
        if(results.length>0)
        {
            console.log("Email is already in use.");
            alert("Email is already in use.");
            res.redirect("/register");

        }
        else if(password1!=password2)
        {
            console.log("Passwords don't match.");
            alert("Passwords don't match.");
            res.redirect("/register");
            
        }
        else{

        let hashedPassword = await bcrypt.hash(password1,8);
        console.log(hashedPassword);

        db.query('insert into clients set ?',{name:name,email:mail,password:hashedPassword},(error,results)=>{
            if(error)
            {
                console.log(error);
                alert("Error occured while inserting data in database.");
                res.redirect("/register");
                
            }
            else
            {
                console.log(results);
                console.log("User registration successful.");
                alert("User registration successful.");
                res.redirect("/login");
            }
        });
    }

    });

};

const getLogin = (req,res) => {
    res.sendFile("login.html",{root:"./views/templates/AdminLTE-master/pages/examples"});
};

const getDashboard = (req,res) => {
    res.sendFile("index.html",{root:"./views/templates/AdminLTE-master"});
}

module.exports = {getRegister, postRegister, getLogin, getDashboard};
// name mail pass1 pass2