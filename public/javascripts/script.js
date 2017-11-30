$(function() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/api",
    "method": "GET",
  }

  $.ajax(settings).done(function (response) {
    var data = [];

    for ( var i = 0, len = response.length; i < len; ++i ){
      data.push([response[i].title, response[i].hits]);
    }
    console.log(data.toString());
    $.plot("#placeholder", [ data ], {
			series: {
				bars: {
					show: true,
					barWidth: 0.6,
					align: "center"
				}
			},
			xaxis: {
				mode: "categories",
				tickLength: 0
			}
		});

  });

});
