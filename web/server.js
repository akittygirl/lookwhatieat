var passport 	= require('passport');

/**** INITIALISE ****/
var settings = require('./settings/development').settings;
//var vtx=require('vtx').init(settings,__dirname,passport);
var vtx=require('./../../../vtxcode/vtx').init(settings,__dirname,passport);
var app=vtx.getApp();
 
var social		= require('./logic/social')
var _   		= require('underscore');
var content 	= require('./content/content');

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
	global.handlers.page(req,res,next,"page/home");
}); 

// Account
app.get('/account', function(req,res,next) {
	global.handlers.page(req,res,next,"page/account");
}); 

// Login
app.get('/login', function(req,res,next) {
	global.handlers.page(req,res,next,"page/login");
}); 

// Register
app.get('/register', function(req,res,next) {
	global.handlers.page(req,res,next,"page/register");
}); 

// Profile with photo feed
app.get('/[id]', function(req,res,next) {
	global.handlers.page(req,res,next,"page/profile");
}); 

 
// Facebook Routes
app.get('/auth/facebook', 
	passport.authenticate('facebook',global.settings.social.facebook.scope));

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