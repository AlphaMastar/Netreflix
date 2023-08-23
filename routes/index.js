var express = require('express');
var router = express.Router();

/* GET API page. */
router.get('/', function(req, res, next) {
  res.type('html');
  res.render('index', { title: 'Welcome To API Use Page' });
});

module.exports = router;
