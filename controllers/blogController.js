//var Blog = require('../models/blog');
var Blog = new Object;

var async = require('async');

exports.blog_create_get = function(req, res, next){
  res.render('blog_create_get', { title: 'New Blog'});
};

exports.blog_create_post = function(req, res, next){
  //put data into database
  var blogTitle = req.body.title;
  var blogMessage = req.body.message;
  res.render('blog_create_post', { title: 'Blog Posted', blogTitle: blogTitle, blogMessage: blogMessage});
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
  res.render('blog_list', { title: testString, blog_list: Blog });
};
