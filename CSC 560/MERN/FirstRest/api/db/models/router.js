//router.js
//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});
//Import Athlete Controller
var athletesController = require('./athletesController');

// Routes
router.route('/athletesModel')
    .get(athletesController.index)
    .post(athletesController.add);
router.route('/athletesNamesModel')
    .get(athletesController.index)
    .post(athletesController.add);
router.route('/athletesEventsModel')
    .get(athletesController.index)
    .post(athletesController.add);

router.route('/athletesModel/:athletes_id')
    .get(athletesController.view)
    .patch(athletesController.update)
    .put(athletesController.update)
    .delete(athletesController.delete);
router.route('/athletesNamesModel/:athletes_id')
    .get(athletesController.view)
    .patch(athletesController.update)
    .put(athletesController.update)
    .delete(athletesController.delete);
router.route('/athletesEventsModel/:athletes_id')  
    .get(athletesController.view)
    .patch(athletesController.update)
    .put(athletesController.update)
    .delete(athletesController.delete);
//Export API routes
module.exports = router;
