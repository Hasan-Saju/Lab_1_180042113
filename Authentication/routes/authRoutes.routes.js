const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser"); //for accessing data from html body
const { getRegister, postRegister, getLogin, postLogin, getDashboard} = require("./../controllers/authController");
const {registration} = require("./../middlewares/auth.middlewares");
const {isLoggedIn} = require("./../middlewares/auth.middlewares")


// reading data from html
router.use(bodyParser.urlencoded({extended: false})); //body r info url a jabe na
router.use(bodyParser.json());

router.get("/register",getRegister);
router.post("/register",postRegister);

router.get("/login",getLogin);
router.post("/login",postLogin);

router.get("/dashboard",isLoggedIn,getDashboard);

module.exports = router;
