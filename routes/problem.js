var express = require('express');
var router = express.Router();

router.get('/problem', function(req, res, next) {
    next(createError('My Error or roblem'));
  });
 /* app.use('/problem', function() {
    throw new Error('I am delibrately throwing an Error');
  });
*/
module.exports = router;
