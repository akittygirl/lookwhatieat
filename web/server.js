
/**** INITIALISE ****/
var settings = require('./settings/development').settings;
var vtx=require('vtx').init(settings,__dirname);
var app=vtx.getApp();

var social		= require('./logic/social')
var _   		= require('underscore');
var passport 	= require('passport');

// Session Preparation
/*
app.all('*',function(req,res,next) {
	request.hit(req,res,function(err) {
		if (err) return new next(err);
		return next();
	});
});
*/

// Home

app.get('/', function(req,res,next) {
	global.handlers.tmp(req,res,next,"page/home");
});


// Facebook Routes
app.get('/auth/facebook', 
	passport.authenticate('facebook',{ scope: ["email","user_location","publish_actions","publish_stream"]}));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/welcome',
                                      failureRedirect: '/login' }));


/**** VTX Handlers ****/
vtx.ajaxHandling();
vtx.errorHandling();



/*
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
*/