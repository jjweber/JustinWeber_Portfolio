var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio/index', { title: 'Justin Weber' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('portfolio/about', { page: 'About' });
});

/* GET work page. */
router.get('/work', function(req, res, next) {
  res.render('portfolio/work', { page: 'Work' });
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('portfolio/blog', { page: 'Blog' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('portfolio/contact', { page: 'Contact' });
});

module.exports = router;
