var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');

router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'JFTF Dashboard' });
});

router.post('/', function(req, res, next) {
  //get emails and add to mailing list
  res.render('dashboard', { title: 'JFTF Dashboard' });
});

module.exports = router;
