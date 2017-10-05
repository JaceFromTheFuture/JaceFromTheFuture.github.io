var express = require('express');
var router = express.Router();

var blog_controller = require('../controllers/blogController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jace From the Future' });
});

router.post('/', function(req, res, next) {
  //get emails and add to mailing list
  res.render('index', { title: 'Jace From the Future' });
});


module.exports = router;
