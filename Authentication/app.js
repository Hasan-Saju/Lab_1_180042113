const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/register", (req, res) => {
    res.sendFile("register.html",{root:"./views/templates/AdminLTE-master/pages/examples"});
});

module.exports = app;