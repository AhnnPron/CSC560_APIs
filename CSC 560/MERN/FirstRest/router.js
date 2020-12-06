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

// Athletes routes
router.route('/athletes')
    .get(athletesController.index)
    .post(athletesController.add);

router.route('/athletes/:athletes_id')
    .get(athletesController.view)
    .patch(athletesController.update)
    .put(athletesController.update)
    .delete(athletesController.delete);
    
//Export API routes
module.exports = router;
