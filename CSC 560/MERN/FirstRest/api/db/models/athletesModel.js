//athletesModel.js
var mongoose = require('mongoose');
//schema
var athleteSchema = mongoose.Schema({
firstName: {
  type: String,
  required: true
},
lastName: {
  type: String,
  required: true
},
division: {
  type: String,
  required: false
},
attributes: [
  {
    age: {
      type: Number,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }
],
events: [
  {
    eventName: {
      type: String,
      required: true
    },
    eventPlace: {
      type: Number,
      required: true
    },
    eventTime: {
      type: String,
      required: false
    }
  }
]
});

// Export athletes Model
var AthletesModel = module.exports = mongoose.model('myathletes', athleteSchema); //myathletes is a database that lives in Mongo
module.exports.get = function (callback, limit) {
   AthletesModel.find(callback).limit(limit);
}
