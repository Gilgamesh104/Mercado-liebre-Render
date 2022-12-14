const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('public'));

const port = process.env.PORT || 3000
app.listen(port, () => console.log("el servidor esta corriendo en el puerto http://localhost:" + port))
    app.get  ("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get  ("/loggin", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/loggin.html"))
})
app.get  ("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})