const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser"); //for accessing data from html body
const { getRegister, postRegister, getLogin, getDashboard} = require("./../controllers/authController")


// reading data from html
router.use(bodyParser.urlencoded({extended: false})); //body r info url a jabe na
router.use(bodyParser.json());

router.get("/register",getRegister);
router.post("/register",postRegister);

router.get("/login",getLogin);
router.get("/dashboard",getDashboard);

module.exports = router;
