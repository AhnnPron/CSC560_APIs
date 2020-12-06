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
var Athletes = module.exports = mongoose.model('myathletes', athleteSchema);
module.exports.get = function (callback, limit) {
   Athletes.find(callback).limit(limit);
}
