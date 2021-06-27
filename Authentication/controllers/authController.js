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
        else if(password1.length<8)
        {
            console.log("Password must be consist with at least 8 characters.");
            alert("Password must be consist with at least 8 characters.");
            res.redirect("/register");
        }
        else if(name.length<=0)
        {
            console.log("Name can not be blank.");
            alert("Name can not be blank.");
            res.redirect("/register");
        } 
        else if(mail.length<=0)
        {
            console.log("Email can not be blank.");
            alert("Email can not be blank.");
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

const postLogin = async(req,res) =>{
    try
    {
        const {mail,password} = req.body;
        if(!mail)
        {
            console.log("Email can not be blank.");
            alert("Email can not be blank.");
            res.redirect("/login");
        }
        else if(!password)
        {
            console.log("Password can not be blank.");
            alert("Password can not be blank.");
            res.redirect("/login");
        }
        else
        {

        db.query('select * from clients where email = ?',[mail], async(error,results)=>{
            console.log(results);
            if(!results || !(await bcrypt.compare(password,results[0].password) ) )
            {
                console.log("Email or Password is incorrect.");
                alert("Email or Password is incorrect.");
                res.redirect("/login");
            }
            else
            {
                // const id = results[0].id;

                // const token = jwt.sign({id:id}, process.env.JWT_SECRET, {
                //     expiresIn: process.env.JWT_EXPIRES_IN
                // });
                
                // // console.log("The token is: "+ token);

                // const cookieOtions = {
                //     expires: new Date(
                //         Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                //     ),
                //     httpOnly: true
                // }
                // res.cookie('jwt',token,cookieOtions);
                res.cookie('usermail','google');
                res.redirect("/dashboard");
            }
        });        
       
    }
    }
    catch(error)
    {
        console.log(error);
    }
};


const getDashboard = (req,res) => {
    res.sendFile("index.html",{root:"./views/templates/AdminLTE-master"});
}

module.exports = {getRegister, postRegister, postLogin, getLogin, getDashboard};
// name mail pass1 pass2