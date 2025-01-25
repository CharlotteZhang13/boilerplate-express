let express = require('express');
let app = express();
require('dotenv').config()

absolutePath = __dirname + '/views/index.html'

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
});
app.get('/json', (req, res) => {
    res.json({"message": "hello json"})
});

app.use('/public', express.static(__dirname + '/public'))




































 module.exports = app;
