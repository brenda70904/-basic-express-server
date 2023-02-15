"use strict";

module.exports = (error, req, res, next) => {
    res.status(500).send({
        error: 500, 
        route: req.path,
        query: req.query,
        body: req.body,
        message: `message:${error.message}`
        // message:typeof(error) === "string" ? error : `Server Error: ${error.message}`,
    });
};
