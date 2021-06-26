const getRegister = (req,res) => {
    res.sendFile("register.html",{root:"./views/templates/AdminLTE-master/pages/examples"});   
}

const getLogin = (req,res) => {
    res.sendFile("login.html",{root:"./views/templates/AdminLTE-master/pages/examples"});
}

const getDashboard = (req,res) => {
    res.sendFile("index.html",{root:"./views/templates/AdminLTE-master"});
}

module.exports = {getRegister, getLogin, getDashboard};