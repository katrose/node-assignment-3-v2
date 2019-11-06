const express = require("express");
const subscribeRoutes = express.Router();
const Subscriber = require('../models/subscriber');

// Serve '/subscribe' page
subscribeRoutes.get('/', function(request, response) {

  console.log('get /subscribe');

  response.render('subscribe');

});

subscribeRoutes.post('/', function(request, response) {
  console.log('get /subscribe');

  /**
   * If subscriber has checked the adult checkbox, then the 'adult' attribute will exist in request.body with a value of 'on'. Otherwise, the attribute will not exist at all. We need to explicitly set this value to true or false in request.body to make it consistent with the Subscriber model. We can then use the request.body object to create a new document and save it to the database with Mongoose.
   */
  if (request.body.adult) {
    request.body.adult = true;
    console.log(request.body);
  } else {
    request.body.adult = false;
    console.log(request.body);
  }

  // Create a new subscriber document with the request.body object and save it to the database.
  const subscriber = new Subscriber(request.body);

  subscriber.save(err => {
    if (err) throw err;
    response.redirect("/");
  });
});

module.exports = subscribeRoutes;