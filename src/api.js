var express = require('express');
var router = express.Router();

// define the home page route
router.get('/notes', function(req, res) {
  res.json({notes: ['a', 'b', 'c', 'd']});
});

module.exports = router;
