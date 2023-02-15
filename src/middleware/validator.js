"use strict";

const validator = (req, res, next) => {
    let name = req.query.name;
    if (!name) {
        res.status(500).send("error, no name")
    }
    res.status(200).json({name:name});
}

module.exports = validator;