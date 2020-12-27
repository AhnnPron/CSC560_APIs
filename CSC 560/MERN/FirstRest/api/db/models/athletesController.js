//athletesController.js

//Import athletesModel
AthletesModel = require('./athletesModel'); //contains all of the athletes with all their events
AthletesNames = require('/athletesNamesModel'); //contains just the athletes first and last names
AthletesEvents = require('/athletesEventsModel'); //contains just the athletes details

//For index
exports.index = function (req, res) {
  console.log(req)
    AthletesModel.get(function (err, athletes) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Athletes Successfully!",
            data: athletes
        });
    });
};
/*
//POST Athletes
exports.add = function (req, res) {
  console.log(req);
    var athletes = new AthletesNames();
    athletes.firstName = req.body.firstName;
    athletes.lastName = req.body.lastName;
    athletes.divison = req.body.division;
    athletes.attributes = req.body.attributes;
    athletes.events = req.body.events;
*/
//POST AthleteName
exports.add = function (req, res) {
  console.log(req);
    var newAthlete = new AthletesNames();
    newAthlete.firstName = req.body.firstName;
    newAthlete.lastName = req.body.lastName;
//Save and check error
    newAthlete.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New Athlete Added!",
            data: newAthlete
        });
    });
};

//POST Athlete Event
exports.add = function (req, res) {
  console.log(req);
    var newEvent = new AthletesEvents();
    newEvent.divison = req.body.division;
    newEvent.attributes = req.body.attributes;
    newEvent.events = req.body.events;
//Save and check error
    newEvent.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: "New Athlete's Events Added!",
            data: newEvent
        });
    };
};

// GET Athlete
/*
exports.view = function (req, res)
{
  //console.log("test")
    Athletes.findById(req.params.athletes_id, function (err, athletes) {
        if (err)
            res.send(err);
        res.json({
            message: 'Athlete Details',
            data: athletes
        });
    });
};
*/

// Get Athlete by Name or Id
exports.view = function (req, res)
{
  //console.log("test")
    AthletesNames.findById(req.params.athletes_id, function (err, newAthlete) {
        if (err)
            res.send(err);
        res.json({
            message: 'Athlete Name:',
            data: newAthlete
        });
    });
};

// Get Athlete Event or by Id
exports.view = function (req, res)
{
  //console.log("test")
    AthletesEvents.findById(req.params.athletes_id, function (err, newEvents) {
        if (err)
            res.send(err);
        res.json({
            message: 'Athlete Events:',
            data: newEvents
        });
    });
};
/*
// PUT Athlete
exports.update = function (req, res) {
    Athletes.findById(req.params.athletes_id, function (err, athletes) {
        if (err)
            res.send(err);
          athletes.firstName = req.body.firstName;
          athletes.lastName = req.body.lastName;
          athletes.divison = req.body.division;
          athletes.attributes = req.body.attributes;
          athletes.events = req.body.events;
//save and check errors
        athletes.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Athlete Updated Successfully",
                data: athletes
            });
        });
    });
};
*/

//Update Athlete Name
exports.update = function (req, res) {
    AthletesNames.findById(req.params.athletes_id, function (err, newAthlete) {
        if (err)
            res.send(err);
          newAthlete.firstName = req.body.firstName;
          newAthlete.lastName = req.body.lastName;
//save and check errors
        newAthlete.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Athlete Name Updated Successfully",
                data: newAthlete
            });
        });
    });
};

//Update Athlete Events Details
exports.update = function (req, res) {
    AthletesEvents.findById(req.params.athletes_id, function (err, newEvents) {
        if (err)
            res.send(err);
            newEvents.divison = req.body.division;
            newEvents.attributes = req.body.attributes;
            newEvents.events = req.body.events;
//save and check errors
        newEvents.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Athlete Data Updated Successfully",
                data: newEvents
            });
        });
    });
};

/*
// DELETE Athlete
exports.delete = function (req, res) {
    Athletes.deleteOne({
        _id: req.params.athletes_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Athlete Deleted'
        })
    })
}
*/

// DELETE Athlete Name
exports.delete = function (req, res) {
    AthleteName.deleteOne({_id: req.params.athletes_id}, function (err, contact)
    {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Athlete Deleted'
        })
    })
}
// DELETE Athlete Event Details
exports.delete = function (req, res) {
    AthletesEvents.deleteOne({_id: req.params.athletes_id}, function (err, contact)
    {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Athlete Event Details Deleted'
        })
    })
}
