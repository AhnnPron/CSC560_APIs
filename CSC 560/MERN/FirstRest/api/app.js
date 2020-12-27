const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { AthletesNames, AthletesEvents } = require('./db/models'); //one liner because we exported both of them in index.js

//Load middleware
app.use(bodyParser.json()); //will parse the request body of the http request

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");
    next();
});

/* ROUTE HANDLERS */

/* LIST ROUTES */

/**
 * GET /athletesNamesModel
 * Purpose: Get all athletes names
 */
app.get('/athletesNamesModel', (req, res) => {
    // We want to return an array of all the athletes names
    AthletesNames.find({    }).then((lists) => {
        res.send(lists);
    })
})
/**
 * GET /athletesNamesModel/:id
 * Purpose: Get the athlete's name by the id in route
 */
app.get('/athletesNamesModel/:id', (req, res) => {
    // We want to return an array of all the athletes names
    AthletesNames.find({    }).then((lists) => {
        res.send(lists);
    })
})

/**
 * POST /athletesNamesModel
 * Purpose: Create a new athlete with only their name
 */
app.post('/athletesNamesModel', (req, res) => {
    // We want to create a new list and return the new list document back to the user (which includes the id)
    // The list information (fields) will be passed in via the JSON request body
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    let newAthlete = new AthletesNames({
        firstName,
        lastName
    });
    newAthlete.save().then((athleteNameDoc) => { //WHAT IS LISTDOC?? in the callback, it will return the listDocument
        // the full list document is returned (incl. id)
        res.send(athleteNameDoc); //WHAT IS LISTDOC??
    })
});

/**
 * PATCH /athletesNamesModel/:id
 * Purpose: Update a specified athlete's name
 */
app.patch('/athletesNamesModel/:id', (req, res) => {
    // We want to update the specified athlete by ID (athlete ID in the URL) with the new values specified in the JSON body of the request
    AthletesNames.findOneAndUpdate({ _id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.send({'message': 'updated successfully'}); 
    });
});

/**
 * DELETE /athletesNamesModel/:id
 * Purpose: Delete an athlete's name
 */
app.delete('/athletesNamesModel/:id', (req, res) => {
    // We want to delete the specified list (document with id in the URL)
    AthletesNames.findOneAndRemove({_id: req.params.id}).then((removedAthleteNameDoc) => {
        res.send(removedAthleteNameDoc);
        deleteNameFromAthletesNames(removedAthleteNameDoc._id);
    })
});


/*
 * GET /athletesNamesModel/:athletesNameId/athletesEventsModel
 * Purpose: Get all the athlete's events by athlete Id
*/
app.get('/athletesNamesModel/:athletesNamesId/athletesEventsModel', (req, res) => {
    // We want to return all athlete's events that belong to a specific athlete
    AthletesEvents.find({
        _athletesNamesId: req.params.athletesNamesId
    }).then((AthletesEvents) => {
        res.send(AthletesEvents);
    })
});

/*
 * GET /athletesNames/:athletesNamesId/athletesEvents/:athletesEventsId
 * Purpose: Get a single event by athlete Id
*/

app.get('/athletesNamesModel/:athletesNamesId/athletesEventsModel/:athletesEventsId', (req, res) => {
    // We want to an existing athlete's event specified by the event Id
            AthletesEvents.findOne({
                _id: req.params.athletesEventsId,
                _athletesNamesId: req.params.athletesNamesId
            }).then((AthletesEvents) => {
                res.send(AthletesEvents);
        })
});

/*
 * POST /athletesNamesModel/:athletesNamesId/athletesEventsModel
 * Purpose: Create add a new event for an athlete
*/
app.post('/athletesNamesModel/:athletesNamesId/athletesEventsModel', (req, res) => {
    // We want to create a new event for the athlete specified by the athlete Id
            let newEvent = new AthletesEvents({
                division: req.body.division,
                attributes: req.body.attributes,
                events: req.body.events,
                _athletesNamesId: req.params.athletesNamesId
            });
            newEvent.save().then((newEventDoc) => {
                res.send(newEventDoc);
            })
})

/*
 * PATCH /athletesNames/:athletesNamesId/athletesEvents/:athletesEventsId
 * Purpose: Update an existing task
*/
app.patch('/athletesNamesModel/:athletesNamesId/athletesEventsModel/:athletesEventsId', (req, res) => {
    // We want to update an existing athlete's events specified by the event Id
            AthletesEvents.findOneAndUpdate({
                _id: req.params.athletesEventsId,
                _athletesNamesId: req.params.athletesNamesId
            }, {
                    $set: req.body
                }
            ).then(() => {
                res.sendStatus(200);
        })
});

/*
 * DELETE /athletesNames/:athletesNamesId/athletesEvents/:athletesEventsId
 * Purpose: Delete an event based on its Id
*/
app.delete('/athletesNamesModel/:athletesNamesId/athletesEventsModel/:athletesEventsId', (req, res) => {
            AthletesEvents.findOneAndRemove({
                _id: req.params.athletesEventsId,
                _athletesNamesId: req.params.athletesNamesId
            }).then((removedAthletesEventsDoc) => {
                res.send(removedAthletesEventsDoc);
    });
});



/* HELPER METHODS */
/*
let deleteTasksFromList = (_listId) => {
    Task.deleteMany({
        _listId
    }).then(() => {
        console.log("Tasks from " + _listId + " were deleted!");
    })
}
*/



app.listen(3000, () => { //listening on 3000
    console.log("Server is listening on port 3000");
})
