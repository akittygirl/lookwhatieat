global.settings=require('./settings/'+app.settings.env).settings;

var app 		= require('./app').init(global.settings.domainPort);
var express 	= require('express');
var content 	= require('./content/content');
var handlers 	= require('./logic/handlers');
var request		= require('./logic/request');

var _   		= require('underscore');
//var passport 	= require('passport');

// Load all the handlers 
require("fs").readdirSync("./handlers").forEach(function(file) {require("./handlers/" + file);});
var handleTemplateRequest=handlers.handleTemplateRequest; 

// Session Preparation
app.all('*',function(req,res,next) {
	request.hit(req,res,function(err) {
		if (err) return new next(err);
		return next();
	});
});

// Ajax Requests
app.post('/', function(req,res,next) {
	if (req.query && req.query.call) {
		handlers.execAction(req,res,req.query.call,function(err,data) {
			if (err) return next(err);
			res.format({
				'appliation/json': function() {
					res.contentType('json');
					return res.send(data);
				}
			})
		});
	} else next();
});

// Home
/*
app.get('/', function(req,res,next) {
	handleTemplateRequest(req,res,next,"page/home");
	//console.log(req.user);
});


// Account
app.get('/account', function(req,res,next) {
	handleTemplateRequest(req,res,next,"page/account");
	//console.log(req.user);
});

// Account Subpage
app.get('/account/:subpage', function(req,res,next) {
	handleTemplateRequest(req,res,next,"page/account");
	//console.log(req.user);
});

// New Topic
app.get('/new-topic', function(req,res,next) {
	handleTemplateRequest(req,res,next,"page/new-topic");
});

// List Topics (Admin Only)
app.get('/list-topics', function(req,res,next) {
	handleTemplateRequest(req,res,next,"page/list-topics");
});

// Edit Topic
app.get('/edit-topic/:topic_id', function(req,res,next) {
	handleTemplateRequest(req,res,next,"page/edit-topic");
});

*/

// Previous Topics

// About 

// Privacy Policy

// Terms of Service

// Media Enquiries

// What's New

// Contact Us


// Facebook Routes
/*
app.get('/auth/facebook', 
	passport.authenticate('facebook',{ scope: ["email","user_location","publish_actions"]}));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
*/

app.get('/*', function(req, res){
    res.render('404.ejs');
});


app.use(function(err, req, res, next){
	console.log(req.path);
  	console.log(err.stack);

  	res.format({
  	  'appliation/json': function() {res.contentType('json');res.send(JSON.stringify({error:err.toString()}));},
	  'text/html': function() {res.render('error.ejs', {  error: err ,status: 500});}
	});
});

/*
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
*/