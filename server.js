const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes'); //import file routes.js
//const methodOverride = require('method-override');

const server = express(); // created server

//middlewares
//server.use(express.urlencoded({ extended: true }));
server.use(express.static('public')); // Read static files from public paste
//server.use(methodOverride('_method'));
server.use(routes); //use variable routes
server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false, // Allow html to run inside variables with html content
  noCache: true
});

server.listen(5000, function() {
  console.log('Server Running');
});