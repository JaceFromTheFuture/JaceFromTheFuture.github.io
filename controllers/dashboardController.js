var request = require('request');
var aws = require('aws-sdk');
var amazon = require('../aws_credentials');

var awsKeyID = amazon.AWS_ACCESS_KEY;
var awsSecretKey = amazon.AWS_SECRET_KEY;
var awsBucket = amazon.S3_BUCKET;

exports.dashboard_get = function(req, res){
  var options = { method: 'GET',
    url: 'http://localhost:3000/api'
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var blogs = JSON.parse(body);
    res.render('dashboard', { title: 'JFTF Dashboard', blog_list: blogs });
  });
};

/*exports.dashboard_post = function(req, res){

  console.log(awsKeyID);
  console.log(req.file);
  console.log(req.body.title);



  req.checkBody('title', 'Title must not be empty.').notEmpty();
  req.checkBody('message', 'Summary must not be empt').notEmpty();

  req.sanitize('title').escape();
  req.sanitize('message').escape();
  req.sanitize('title').trim();
  req.sanitize('message').trim();

  var errors = req.validationErrors();

  if(errors){
    res.render('dashboard', { title: 'JFTF Errors', errors : errors} );
  }
  else {
    var options = { method: 'POST',
    url: 'http://localhost:3000/api',
    headers:
     { 'content-type': 'application/json' },
    body: { title: req.body.title, message: req.body.message },
    json: true };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });
  }

};
*/
exports.dashboard_edit_get = function(req, res){
  var url = 'http://localhost:3000/api/' + req.params.id
  var options = { method: 'GET',
    url: url
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    if(body == 'null'){
      res.redirect('/dashboard');
    }
    else {
      var blog = JSON.parse(body);
      res.render('blog_form', {blog : blog});
    }
  });
};

exports.dashboard_edit_post = function(req, res){
  var url = 'http://localhost:3000/api/' + req.params.id;
  //validate form data

  //upload file get link

  //send to api
  var options = { method: 'POST',
    url: url,
    headers: { 'content-type': 'application/json' },
    form: { title: 'helelo', message: 'hello' }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.redirect('/dashboard');
  });

};
