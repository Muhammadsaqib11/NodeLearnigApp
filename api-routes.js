
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to APIREST crafted with love!'
    });
});
// Import contact controller
var contactController = require('./contactController');
// Import Detail controller
var detailControler = require('./detailControler');
// Import collection controller
var collectionController = require('./collectionController');

 // calling Detail API
router.route('/details')
    .get(detailControler.detailReport)
// Contact routes


 router.route('/contacts')
    .get(contactController.index)

    // Collection routes
 router.route('/collection')
 .get(collectionController.collectionReport)


// Export API routes
module.exports = router;
// Export API routes
module.exports = router;