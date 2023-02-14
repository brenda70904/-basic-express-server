"use strict";

const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();
const errorHandler = require("./error-handlers/500.js")

const stamper = require("./middleware/stamper.js")


app.get ("/", (req, res)=>{
    const message = "here's the name ";
    res.status(200).send(message);
});


app.get("/person", stamper, (req, res, next)=>{
    if(!req.query.name){
        next();
        return;
    }

    const message = `name: ${req.query.name}`;
    res.status(200).json(output);
})

app.use(errorHandler);

function start () {
    app.listen(PORT, ()=> console.log(PORT))
}

module.exports = { start, app };

