var express = require('express');
var router = express.Router();

var blog_controller = require('../controllers/blogController');

router.get('/create', blog_controller.blog_create_get);

router.post('/create', blog_controller.blog_create_post);

router.get('/blog/:id/delete', blog_controller.blog_delete_get);

router.post('/blog/:id/delete', blog_controller.blog_delete_post);

router.get('/blog/:id/update', blog_controller.blog_update_get);

router.post('/blog/:id/update', blog_controller.blog_update_post);

router.get('/', blog_controller.blog_list);

module.exports = router;
