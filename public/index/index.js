"use strict";
var express = require("express");
var router = express.Router();


var message = "this is the doodles api homepage";

router.get('/', function (req, res, next) {
    res.json(message);
});

module.exports = router;