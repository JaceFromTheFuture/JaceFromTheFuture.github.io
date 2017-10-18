var Blog = require('../models/blog');

var async = require('async');

exports.blog_create_get = function(req, res, next){
  res.render('blog_create', { title: 'New Blog'});
};

exports.blog_create_post = function(req, res, next){
  //put data into database
  var blogTitle = req.body.title;
  var blogMessage = req.body.message;
  res.render('blog_create', { title: 'Blog Posted', blogTitle: blogTitle, blogMessage: blogMessage});
};

exports.blog_delete_get = function(req, res, next){
  res.send("Blog Delete GET");
};

exports.blog_delete_post = function(req, res, next){
  res.send("Blog Delete Post");
};

exports.blog_update_get = function(req, res, next){
  res.send("Blog Update GET");
};

exports.blog_update_post = function(req, res, next){
  res.send("Blog Update Post");
};

exports.blog_list = function(req, res){
  Blog.find({}, 'title body').exec(function (err, list_blogs) {
     if (err) {
       return next(err);
     }
     res.render('blog_list', { title: 'Blogs', blog_list: list_blogs });
   });
};
