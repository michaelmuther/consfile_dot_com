var express = require('express')
    , router = express.Router();
    
//ROOT ROUTE
router.get('/', function(req, res){
    res.render('landing');
});

module.exports = router; // must export this to require in app.js