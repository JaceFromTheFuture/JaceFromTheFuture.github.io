$(function() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/api",
    "method": "GET",
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
var d1 = [[0, 3], [4, 8], [8, 5], [9, 13]];
$.plot("#placeholder", [d1]);

});
