var express = require('express');
var router = express.Router();

var dashboard_controller = require('../controllers/dashboardController');

router.get('/', dashboard_controller.dashboard);

router.post('/', function(req, res, next) {
  //get emails and add to mailing list
  res.render('dashboard', { title: 'JFTF Dashboard' });
});

module.exports = router;
