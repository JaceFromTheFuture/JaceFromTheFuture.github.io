var Blog = require('../models/blog');

var async = require('async');

exports.blog_list = function(req, res){
  Blog.find({}, 'title date').exec(function (err, list_blogs) {
     if (err) {
       return next(err);
     }
     res.render('blog_list', { title: 'Blogs', blog_list: list_blogs });
   });
};

exports.blog_view = function(req, res, next){
  Blog.findById(req.params.id).exec(function (err, blog){
    if(err){
      return next(err);
    }
    res.render('blog_view', { title: 'Blogs', blog: blog});
  });
};

exports.blog_create_get = function(req, res, next){
  res.render('blog_create', { title: 'New Blog'});
};

exports.blog_create_post = function(req, res, next){
  //actions to perform with post data
  req.checkBody('title', 'Title must not be empty.').notEmpty();
  req.checkBody('message', 'Summary must not be empt').notEmpty();

  req.sanitize('title').escape();
  req.sanitize('message').escape();
  req.sanitize('title').trim();
  req.sanitize('message').trim();

  var blog = new Blog(
    { title: req.body.title,
      message: req.body.message
    });

  var errors = req.validationErrors();
  if (errors) {
    res.render('blog_create', { title: 'New Blog', errorMessage: 'Fill in the information'});
  }
  else {
    //save data to database
    blog.save(function (err) {
      if (err) {
        console.log(err)
      }
      res.redirect('/blogs');
    });
  }
};

exports.blog_update_get = function(req, res, next){
  Blog.findById(req.params.id).exec(function (err, blog){
    if(err){
      return next(err);
    }
    res.render('blog_update', { title: 'Update Blog', blog: blog});
  });
};

exports.blog_update_post = function(req, res, next){
  //actions to perform with post data
  req.checkBody('title', 'Title must not be empty.').notEmpty();
  req.checkBody('message', 'Summary must not be empt').notEmpty();

  req.sanitize('title').escape();
  req.sanitize('message').escape();
  req.sanitize('title').trim();
  req.sanitize('message').trim();

  var blog = new Blog(
    { title: req.body.title,
      message: req.body.message,
      _id:req.params.id
    });

  var errors = req.validationErrors();
  if (errors) {
    res.render('blog_update', { title: 'Update Blog'});
  }
  else {
    Blog.findOneAndUpdate({_id: req.params.id}, blog, {new: true}, function(err, blog) {
      if (err){
        res.send(err);
      }
      res.redirect('/blogs');
    });
  }
};
