const express = require('express');
const app = express();

//Rotas
const index = require('./pessoa');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);

module.exports = app;