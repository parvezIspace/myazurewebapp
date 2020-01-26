var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Azure Express' });
});
// router.get('/problem', function(req, res, next) {
//   throw new Error('I am delibrately throwing an Error');
// });
module.exports = router;
