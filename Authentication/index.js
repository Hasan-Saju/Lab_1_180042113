require('dotenv').config()
const app = require('./app')
// const PORT = 7777;
const PORT = 7777

app.listen(PORT, () => {
    console.log('Server is running at PORT %d.', PORT);
});