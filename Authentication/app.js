const express = require('express');
const app = express();
const userRoutes = require("./routes/authRoutes.routes");

app.use(express.static("public"));
app.use(userRoutes);

module.exports = app;