const express = require('express');
const app = express();
const userRoutes = require("./routes/authRoutes.routes");

app.use(express.static("public"));

app.use(userRoutes);

// app.get("/register", (req, res) => {
//     res.sendFile("register.html",{root:"./views/templates/AdminLTE-master/pages/examples"});
// });

// app.get("/login", (req, res) => {
//     res.sendFile("login.html",{root:"./views/templates/AdminLTE-master/pages/examples"});
// });

// app.get("/dashboard", (req, res) => {
//     res.sendFile("index.html",{root:"./views/templates/AdminLTE-master"});
// });

module.exports = app;