var Blog = require('../models/blog');
var request = require('request');


exports.dashboard_get = function(req, res){
  var options = { method: 'GET',
    url: 'http://localhost:3000/api'
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.json(body);
  });
};

exports.dashboard_post = function(req, res){
  req.checkBody('title', 'Title must not be empty.').notEmpty();
  req.checkBody('message', 'Summary must not be empt').notEmpty();

  req.sanitize('title').escape();
  req.sanitize('message').escape();
  req.sanitize('title').trim();
  req.sanitize('message').trim();
  
  var options = { method: 'POST',
  url: 'http://localhost:3000/api',
  headers:
   { 'content-type': 'application/json' },
  body: { title: 'New', message: 'New Blog' },
  json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);}
  );
};
