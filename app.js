/**
 * Module Imports
 */
const express = require('express');
const path = require('path');

const subscribeRoutes = require('./routes/subscribeRoutes')

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

/**
 * Express/EJS Setup
 */
const app = express();

// Allows us to exclude the file extension
app.set('view engine', 'ejs'); 

/**
 * Database Connection
 */
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!!!');
});

/**
 * Middleware
 */

// Read HTTP POST data (this needs to be placed above the POST request)
app.use(express.urlencoded({ extended: false }))

// Serve static assets. Will serve all types of files (css, images) as long as they are in the directory specified in path.join()
app.use(express.static(path.join(__dirname, 'assets')));


/**
 * Endpoints
 */
app.get('/', function(request, response) {
  response.render('index', { success: false });
});

app.get('/:page', function(request, response) {
  response.render(request.params.page, { success: false }); // params.page = :page
});

/**
 * Routes
 */

 app.use('/subscribe', subscribeRoutes);

/**
 * Error handler
 */

 // This will catch non-404 errors as well
app.use(function(err, request, response, next) {
  if (err) {
    console.log(err);
    response.status(404);
    response.render('filenotfound');
  }
});

/**
 * Server start
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
