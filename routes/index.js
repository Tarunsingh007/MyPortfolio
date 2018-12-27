var express = require('express');
var router = express.Router();
var Person=require('../models/person.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Tarun Singh' });
});
router.get('/Tarun_Singh', function(req, res, next) {
  res.render('index', { title: 'Tarun Singh' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.post('/contact/done', function(req, res, next) {
	var name=req.body.name;
	var email=req.body.email;
	var message=req.body.message;
	var subject=req.body.subject;
	new Person({
		name,
		email,
		subject,
		message
	}).save().then((person)=>{
		console.log(person);
	})
  res.render('index',{done:"submitted"});
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Resume' });
});
router.get('/skills', function(req, res, next) {
  res.render('resume', { title: 'Resume' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

module.exports = router;
