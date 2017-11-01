var Blog = require('../models/blog');

var async = require('async');

exports.dashboard = function(req, res){
  Blog.find({}).exec(function (err, blog) {
     if (err) {
       return next(err);
     }
     res.render('dashboard', { title: 'JFTF Dashboard', blog_list: blog });
   });
};
