"use strict";

const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();
const logger = require("./middleware/logger.js");
const validator = require("./middleware/validator.js");
const notFound = require("./error-handlers/500.js");
const handleServerError = require("./error-handlers/400.js");

app.get("/", logger, (req, res) => {
    const message = "here's the name ";
    res.status(200).send(message);
});


app.use("/person", logger, validator, (req, res) => {
    const person = { name: req.query.name };
    res.status(200).json(person);
});

app.use("*", notFound);
app.use(handleServerError);


function start() {
    app.listen(PORT, () => console.log(PORT))
}

module.exports = { start, app };

