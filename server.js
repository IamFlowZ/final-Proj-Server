var express = require('express');
var app = express();
var cors = require('cors');
var path = require("path");
var parser = require("body-parser");


var server = app.listen(3000, function() {
    console.log('server is listening on port:3000');
});

var corsOptions = {
    AccessControlAllowOrigin: '*',
    AccessControlAllowMethods: 'PUT, DELETE, OPTIONS',
    AccessControlAllowHeaders: 'Content-Type'
}

app.use(cors(corsOptions));
app.use(parser.json());
app.use('/api', express.static(path.join(__dirname, 'api')));
app.use('/api', require('./api/users/users'));
app.use('/api', require('./api/lobbies/lobbies'));
// app.use('/api', require('./api/images/images'));


module.exports = app;