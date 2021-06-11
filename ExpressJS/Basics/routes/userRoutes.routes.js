const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser"); //for accessing data from html body
const isLoggedIn = require("./../middlewares/auth.middlewares");
const { getRegister, postRegister, getLogin, getDashboard} = require("./../controllers/userController.controllers")


// reading data from html
router.use(bodyParser.urlencoded({extended: false})); //body r info url a jabe na
router.use(bodyParser.json());


//using the controller files
router.get("/login",getLogin);
router.get("/dashboard",getDashboard);
router.get("/register",getRegister);
router.post("/register",isLoggedIn,postRegister);


/*
router.get("/login",(req,res)=>{
    // const id = req.query.id;
    // const username = req.query.username; 

    // together
    const{id,username}=req.query;

    // res.send("This is Login Page");
    res.send(`user with ID - ${id} and Username - ${username} is requesting to login.`);
});



// // accessing parameters from url
// router.get("/dashboard/:id/:username",(req,res)=>{
//     const id = req.params.id;
//     const username = req.params.username;
//     res.send(`user with ID - ${id} and Username - ${username} is requesting to access.`);
// });



// for using router middleware
router.get("/dashboard",(req,res)=>{
    res.send("User Dashboard");
});

router.get("/register",(req,res)=>{
    // res.send("This is Register Page");
    //first param -> filename, 2nd ->path, root = from the location where project started
    res.sendFile("register.html",{root:"./views/users"});   
    
});


// router.post("/register",(req,res)=>{
//     const username = req.body.username;
//     const email =req.body.email; //last part ta html tag a set kora nam
//     // res.sendFile("register.html",{root:"./views/users"});    
//     res.send(`<h1>user with Email - ${email} and Username - ${username} filled the registration form.</h1>`)
// });


// for using router middleware
router.post("/register",isLoggedIn,(req,res)=>{
    res.redirect("/dashboard");
});

*/

module.exports = router;