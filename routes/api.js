var express = require('express');
var router = express.Router();
var imageColorController = require('../controller/imageColorController')

/* GET API page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome To API Use Page' });
});

/* GET imageColor */
router.get('/imagecolor',function(req, res, next){
  imageColorController.imageColorController(req, res);
});

module.exports = router;
