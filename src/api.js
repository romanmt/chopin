import express from 'express'
import * as da from './data_access.js'
const router = express.Router();

// define the home page route
router.get('/chords', function(req, res) {
  da.getChords(req.query.key, (err, chords) => {
    res.json({chords: chords});
  })
});

module.exports = router;
