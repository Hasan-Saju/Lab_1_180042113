const db = require('./../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
        }
        else if(password1!=password2)
        {
            console.log("Password doesn't match.");
        }

        let hashedPassword = await bcrypt.hash(password1,8);
        console.log(hashedPassword);

    });

    next();
}

module.exports = {registration};