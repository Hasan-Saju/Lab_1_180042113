const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.listen(8888, ()=>{
    console.log("Server is running at port 8888.");
});