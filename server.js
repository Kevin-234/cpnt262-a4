const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const ejs = require('ejs');

// Create the express server
const app = express();

// Require the gallery module
const arts= require('./arts.js');

// View engine
app.set('view engine', 'ejs');

// order matter
// app.use is for using middleware to render static files
app.use(express.static(path.join(__dirname, 'public')));


// Homepage index render
app.get('/', function(request, response) {
    response.render('pages/index', 
    {
      title: "Homepage", 
      tagline: "Asia Art",
      current: "home"
    });
  });
  
  // Subscribe render
  app.get('/subscribe', function(request, response) {
    response.render('pages/subscribe', 
    {
      title: "Subscribe", 
      tagline: "Get the latest updates.",
      current: "subscribe"
    });
  });
  
  // Gallery render
  app.get('/gallery', function(request, response) {
    response.render('pages/gallery', 
    {
        title: "Gallery", 
        tagline: "Ancient Asia Arts",
        current: "gallery-page"
    });
  });
  


// JSON end-point
app.get('/api/v0/gallery', function(request, response) {
    response.json(arts);
  });

// 404 error 
app.use(function(request, response) {
  response.status(404);
  response.send('404: File Not Found');
});

// default 3000, PORT = 3000
const PORT = process.env.PORT || 3000;

// Listen on PORT
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});