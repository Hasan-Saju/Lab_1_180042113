const express = require('express');
const app = express();
const userRoutes = require("./routes/authRoutes.routes");
const cookieParser = require('cookie-parser');

app.use(express.static("public"));
app.use(userRoutes);
app.use(cookieParser());

module.exports = app;