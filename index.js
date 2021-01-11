const express = require('express');
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http =require('http');

async function start() {
    try {
        await mongoose.connect('mongodb+srv://iuldash:123qwe123qwe@cluster0.gnyyv.mongodb.net/mevn', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
    }catch (e) {
        console.log(e)
    }
}

const  app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({express: true}));

const port = 3000;
http.createServer({}, app).listen(port);
console.log(port);
