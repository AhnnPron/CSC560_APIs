const mongoose = require('mongoose');
//schema
const AthletesEventsSchema = new mongoose.Schema({
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
        required: false //some events are not timed
      }
    }
  ],
  _athletesNamesId: { //this connects the athlete Name to the athlete Events (through the Id generated)
    type: mongoose.Types.ObjectId,
    required: true
  }
})


const AthletesEvents = mongoose.model('AthletesEvents', AthletesEventsSchema); //lowercase 'M' in model, you idiot
module.exports = { AthletesEvents }


/* UNIT 3
// Export athletes Model
var AthletesEvents = module.exports = mongoose.model('athletesEvents', AthleteEventsSchema); //athletesEvents is NOT a database that lives in Mongo
module.exports.get = function (callback, limit) {
   AthletesEvents.find(callback).limit(limit);
}
*/
