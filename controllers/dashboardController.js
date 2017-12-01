var request = require('request');

exports.dashboard_get = function(req, res){
  var options = { method: 'GET',
    url: 'http://localhost:3000/api'
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var blogs = JSON.parse(body);
    res.render('dashboard', { title: 'JFTF Dashboard', blog_list: blogs });
  });
};

exports.dashboard_edit_get = function(req, res){
  var url = 'http://localhost:3000/api/' + req.params.id
  var options = { method: 'GET',
    url: url
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    if(body == 'null'){
      res.redirect('/dashboard');
    }
    else {
      var blog = JSON.parse(body);
      res.render('blog_form', {title: 'Edit Blog', blog : blog});
    }
  });
};
