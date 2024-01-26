const express = require('express');
const { json } = require('express/lib/response.js');
const aktorlerRouter = require('./routers/aktorlerRouter');
const logger = require('./middlewares/logger');
const errorHandling = require('./middlewares/errorHandling');

const server = express();

server.use(express.json());

server.use(logger);
server.use("/aktorler", aktorlerRouter);



server.get('/',(req,res) => {
    res.send("express'ten merhaba");
});

server.use(errorHandling);

server.listen(5002, () => {
    console.log("http://localhost:5002 e gelen istekler dinleniyor.");
});