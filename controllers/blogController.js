var request = require('request');

exports.blog_list = function(req, res){
  var options = { method: 'GET',
    url: 'http://localhost:3000/api'
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var blogs = JSON.parse(body);
    console.log(blogs);
    res.render('blogs', { title: 'Blogs', blog_list: blogs });
  });
};

exports.blog_view = function(req, res, next){
  var url = 'http://localhost:3000/api/' + req.params.id
  var options = { method: 'GET',
    url: url
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    if(body == 'null'){
      res.redirect('/blogs');
    }
    else {
      var blog = JSON.parse(body);
      res.render('blog_view', {title : 'Blog', blog : blog});
    }
  });
};
