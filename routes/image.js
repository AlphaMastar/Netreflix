var express = require('express');
var router = express.Router();
var imageColorController = require('../controller/imageColorController');

/* GET imageColor page. */
router.get('/', function(req, res) {
  res.render('index', { title: '图片主色调API使用页面' });
});

/* GET imageColor. */
router.get('/:urlParam', function(req, res) {
  imageColorController.imageColorController(req, res);
});

module.exports = router;