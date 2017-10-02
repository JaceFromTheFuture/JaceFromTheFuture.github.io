var Blog = require('../models/blog');

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
  res.send('list');
};
