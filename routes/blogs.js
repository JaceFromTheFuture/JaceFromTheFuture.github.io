var express = require('express');
var router = express.Router();

var blog_controller = require('../controllers/blogController');

router.get('/create', blog_controller.blog_create_get);

router.post('/create', blog_controller.blog_create_post);

router.get('/:id/update', blog_controller.blog_update_get);

router.post('/:id/update', blog_controller.blog_update_post);

router.get('/:id', blog_controller.blog_view);

router.get('/', blog_controller.blog_list);

module.exports = router;
