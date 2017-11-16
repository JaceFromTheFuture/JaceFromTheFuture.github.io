var express = require('express');
var router = express.Router();

var blog_controller = require('../controllers/blogController');

router.get('/:id', blog_controller.blog_view);

router.get('/', blog_controller.blog_list);

module.exports = router;
