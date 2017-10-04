var Blog = require('../models/blog');

var async = require('async');

exports.blog_create_get = function(req, res, next){
  res.send("Blog Create GET");
};

exports.blog_create_post = function(req, res, next){
  res.send("Blog Create Post");
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
  var list_blogs = new Object();
  res.render('blog_list', { title: 'Jace From The Future', blog_list: list_blogs });
};
