const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema(
  { 
    name: { 
      type: String, 
      required: true 
    }, 

    email: { 
      type: String, 
      required: true,
      unique: true
    }, 
     
    adult: { 
      type: Boolean, 
      default: false
    } 
  }
);

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;