require('dotenv').config()
const app = require('./app')
const db = require('./database')
const PORT = process.env.PORT       // const PORT = 7777;

app.listen(PORT, () => {
    console.log('Server is running at PORT %d.', PORT);
});