var express = require('express');
var router = express.Router();

var dashboard_controller = require('../controllers/dashboardController');

router.get('/', dashboard_controller.dashboard_get);

router.post('/', dashboard_controller.dashboard_post);

module.exports = router;
