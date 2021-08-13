const mongoose = require('mongoose')
const db = require('../db/db')

const subscribersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscriberDate: {
    type: Date,
    required: true,
    default: Date.now
  }

})

// when we export, first is the name of the model in our db, in this case Subscriber and also the schema.
// this creates a MODEL for us to use
module.exports = mongoose.model('Subscriber', subscribersSchema)