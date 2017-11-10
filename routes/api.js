var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/apiController');

router.get('/', api_controller.blog_list);

router.post('/', api_controller.blog_create);

router.get('/:id', api_controller.blog_view);

router.post('/:id', api_controller.blog_update);

router.delete('/', api_controller.blog_delete);

module.exports = router;
