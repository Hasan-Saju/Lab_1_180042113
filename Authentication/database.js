const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_auth"
});

db.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("MYSQL Connected...!");
    }
});
