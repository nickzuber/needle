
// Basic server configuration

var express = require('express');
var path = require('path');

var _port = 8080;

var app = express();

// Collect the routes
var routes = require('./routing.js');

// Allow access to file directory
app.use(express.static(path.join(__dirname, 'scripts')));

// Set up routes
routes(app);

// Create server
app.listen(_port, function(){
    console.log('Ready on port ' + _port + '...');
});