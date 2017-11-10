var request = require('request');

exports.dashboard_get = function(req, res){
  var options = { method: 'GET',
    url: 'http://localhost:3000/api'
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var blogs = JSON.parse(body);
    console.log(blogs);
    res.render('dashboard', { title: 'JFTF Dashboard', blog_list: blogs });
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

exports.dashboard_edit_get = function(req, res){
  var url = 'http://localhost:3000/api/' + req.params.id
  var options = { method: 'GET',
    url: url
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.send(body);
  });
};

exports.dashboard_edit_post = function(req, res){
  res.send('hello');
};
