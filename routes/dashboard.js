var express = require('express');
var router = express.Router();
var request = require('request');
var dashboard_controller = require('../controllers/dashboardController');

//AWS
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./aws_credentials.json');
var s3 = new AWS.S3();

//Multer
var multer  = require('multer');
var multerS3 = require('multer-s3');

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'jace-blog-images',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

router.get('/', dashboard_controller.dashboard_get);

router.get('/create', function(req, res){
  res.render('blog_create', { title: 'New Blog'});
});

router.post('/create', upload.single('file'), function(req, res){
  req.checkBody('title', 'Title must not be empty.').notEmpty();
  req.checkBody('message', 'Summary must not be empt').notEmpty();

  req.sanitize('title').escape();
  req.sanitize('message').escape();
  req.sanitize('title').trim();
  req.sanitize('message').trim();

  var errors = req.validationErrors();

  if(errors){
    console.log(errors);
    res.redirect('/dashboard');
  }
  else {
    var options = { method: 'POST',
    url: 'http://localhost:3000/api',
    headers:
     { 'content-type': 'application/json' },
    body: { title: req.body.title, message: req.body.message, link: req.file.location},
    json: true };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });
    res.redirect('/dashboard');
  }

});

router.get('/:id', dashboard_controller.dashboard_edit_get);

router.post('/:id', upload.single('file'), function(req, res){
  req.checkBody('title', 'Title must not be empty.').notEmpty();
  req.checkBody('message', 'Summary must not be empt').notEmpty();

  req.sanitize('title').escape();
  req.sanitize('message').escape();
  req.sanitize('title').trim();
  req.sanitize('message').trim();

  var errors = req.validationErrors();

  if(errors){
    console.log(errors);
    res.redirect('/dashboard');
  }
  else {
    var url = 'http://localhost:3000/api/' + req.params.id;
    var options = { method: 'POST',
    url: url,
    headers:
     { 'content-type': 'application/json' },
    body: { title: req.body.title, message: req.body.message, link: req.file.location},
    json: true };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });
    res.redirect('/dashboard');
  }

});

module.exports = router;
