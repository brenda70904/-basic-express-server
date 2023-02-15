"use strict";

const validator = (req, res, next) => {
    let name = req.query.name;
    if (!name) {
        res.status(500).json("sorry")
    }
    res.status(200).json({name:name});
}

module.exports = validator;