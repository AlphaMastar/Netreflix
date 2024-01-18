var express = require('express');
var router = express.Router();
var chineseTraditionController = require('../controller/chineseTraditionController');

/* GET Chinese page. */
router.get('/', function(req, res) {
  res.render('index', { title: '古诗文API使用页面' });
});

/* GET ChineseTradition */
router.get('/:type',function(req, res, next){
  chineseTraditionController.chineseTraditionController(req, res);
});

/* GET ChineseTradition(Search) */
router.get('/:type/search',function(req, res, next){
  chineseTraditionController.searchController(req, res);
});

module.exports = router;
