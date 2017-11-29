var express = require('express');
var router = express.Router();
var dashboard_controller = require('../controllers/dashboardController');

//AWS
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./aws_credentials.json');
var s3 = new AWS.S3();

//Multer
var multer  = require('multer');
var multerS3 = require('multer-s3');

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'jace-blog-images',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

router.get('/', dashboard_controller.dashboard_get);

router.post('/', upload.single('file'), function(req, res){
  res.send('Successfully uploaded ' + req.file.location + ' files!')
  console.log(req.file);

});

router.get('/:id', dashboard_controller.dashboard_edit_get);

router.post('/:id', dashboard_controller.dashboard_edit_post);

module.exports = router;
