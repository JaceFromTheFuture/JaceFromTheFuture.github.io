var Blog = require('../models/blog');

exports.blog_list = function(req, res){
  Blog.find({}).exec(function (err, blog) {
     if (err) {
       return next(err);
     }
     res.json(blog);
   });
};

exports.blog_create = function(req, res){
  var new_blog = new Blog(req.body);
  new_blog.save(function (err, blog) {
    if (err) {
      console.log(err)
    }
    res.json(blog);
  });
};

exports.blog_view = function(req, res){
  Blog.findById(req.params.id).exec(function (err, blog){
    if(err){
      return next(err);
    }
    res.json(blog);
  });
};

exports.blog_update = function(req, res){
  Blog.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, blog) {
    if (err){
      res.send(err);
    }
    res.json(blog);
  });
};
