var express = require('express');
var router = express.Router();
var imageColorController = require('../controller/imageColorController');
var chineseTraditionController = require('../controller/chineseTraditionController');

/* GET API page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome To API Use Page' });
});

/* GET imageColor */
router.get('/imagecolor',function(req, res, next){
  imageColorController.imageColorController(req, res);
});

/* GET ChineseTradition */
router.get('/chinese/:type',function(req, res, next){
  chineseTraditionController.chineseTraditionController(req, res);
});

/* GET ChineseTradition */
router.get('/chinese/:type/:id/',function(req, res, next){
  chineseTraditionController.chineseTraditionController(req, res);
});

module.exports = router;
