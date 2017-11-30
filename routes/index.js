var request = require('request');
var express = require('express');
var router = express.Router();

var blog_controller = require('../controllers/blogController');

router.get('/', function(req, res, next) {
  var url = 'http://localhost:3000/api/5a2026a8c2b9ea423c14d08e'
  var options = { method: 'GET',
    url: url
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    var blog = JSON.parse(body);
    res.render('index', { title: 'Jace From the Future', blog: blog });
  });
});

router.post('/', function(req, res, next) {
  //get emails and add to mailing list
  res.render('index', { title: 'Jace From the Future' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About the Artist' });
});

module.exports = router;
