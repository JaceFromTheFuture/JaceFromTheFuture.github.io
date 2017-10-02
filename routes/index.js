var express = require('express');
var router = express.Router();

var blog_controller = require('../controllers/blogController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jace From the Future' });
});

module.exports = router;
