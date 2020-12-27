
const mongoose = require('mongoose');
//schema
const AthletesNamesSchema = new mongoose.Schema({ //AthletesNamesSchema is the new instance of mongoose
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
})

const AthletesNames = mongoose.model('AthletesNames', AthletesNamesSchema); //AthletesNames is the name of the database, and AthletesNamesSchema is the name of the new instance of mongoose
//lowercase 'M' in model, you idiot
module.exports = { AthletesNames }

/* UNIT 3
// Export athletes Model
var AthletesNamesModel = module.exports = mongoose.model('athletesNames', athletesNamesSchema); //athletesNames is NOT a database that lives in Mongo
module.exports.get = function (callback, limit) {
   AthletesNamesModel.find(callback).limit(limit);
}
*/
