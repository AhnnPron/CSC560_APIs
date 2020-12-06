//athletesController.js

//Import athletesModel
Athletes = require('./athletesModel');

//For index
exports.index = function (req, res) {
  console.log(req)
    Athletes.get(function (err, athletes) {
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
//POST Athlete
exports.add = function (req, res) {
  console.log(req);
    var athletes = new Athletes();
    athletes.firstName = req.body.firstName;
    athletes.lastName = req.body.lastName;
    athletes.divison = req.body.division;
    athletes.attributes = req.body.attributes;
    athletes.events = req.body.events;

//Save and check error
    athletes.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New Athlete Added!",
            data: athletes
        });
    });
};

// GET Athlete  
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
// GET Athlete's by ID Best Event
/*
exports.view = function (req, res)
{
  //console.log("test")
    Athletes.findById(req.params.athletes_id, function (err, athletes) {
        if (err)
            res.send(err);
        var dbo = db.db("myathletes");
        var Bestfinish = {eventPlace: 1};
        dbo.collection("events").find(Bestfinish).toArray(function(err, athletes)){
          if (err)
              res.json(err);
        res.json({
            message: 'Athletes Best Event',
            data: athletes
        });
    });
};
*/
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
