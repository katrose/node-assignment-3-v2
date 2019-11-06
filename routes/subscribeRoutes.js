const express = require("express");
const subscribeRoutes = express.Router();
// const Subscriber = require('../models/subscriber');

// Serve '/subscribe' page
subscribeRoutes.get('/', function(request, response) {
  
  console.log('get /subscribe');

  response.render('subscribe');

});

subscribeRoutes.post('/', async function(request, response) {
  console.log('get /subscribe');
  console.log(request.body);

  try {

    // const subscribers = await Subscriber.find({});
    response.redirect('index');

  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = subscribeRoutes;