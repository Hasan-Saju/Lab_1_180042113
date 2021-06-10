const express = require("express");
const app = express();
const PORT = 7777;

// handing base url
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.listen(PORT, () => {
    console.log('Server is running at PORT %d.',PORT);
});