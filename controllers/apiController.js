var Blog = require('../models/blog');
var moment = require('moment');

exports.blog_list = function(req, res){
  Blog.find({}).exec(function (err, blog) {
     if (err) {
       return next(err);
     }
     res.json(blog);
   });
};

exports.blog_create = function(req, res){
  var blogDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  var new_blog = new Blog(
    {
      title: req.body.title,
      message: req.body.message,
      date: blogDate
    });

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
  var blogDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(blogDate);

  var new_blog = new Blog(
    {
      _id: req.params.id,
      title: req.body.title,
      message: req.body.message,
      date: blogDate
    });

  console.log(new_blog);

  Blog.findOneAndUpdate({_id: req.params.id}, new_blog, {new: true}, function(err, blog) {
    if (err){
      res.send(err);
    }
    res.json(blog);
  });
};

exports.blog_delete = function(req, res){
  Blog.remove({}, function(err, blog) {
    if (err)
      res.send(err);
    res.json({ message: 'Blogs successfully deleted' });
  });
};
