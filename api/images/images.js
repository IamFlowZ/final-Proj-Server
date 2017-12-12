"use strict";
var express = require("express");
var router = express.Router();
var socket = require("socket.io");

const images = [

];

socket.on('image', function(image) {
    images.push(image);
});

router.get('/images', function(req, res, next) {
    console.log("recieved request: images");
    res.json(images);
});

router.get('/images/:id', function (req, res, next) {
    console.log("recieved request: specific image");
    var id = parseInt(req.params['id']);
    var lobby = findImage(id);
    if (image) {
      res.json(image);
    }
    else{
      res.json('image not found');
    }    
  });



