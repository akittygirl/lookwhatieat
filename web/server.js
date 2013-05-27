var passport 	= require('passport');

/**** INITIALISE ****/
var settings = require('./settings/development').settings;

// Mongoose
var mongoose = require('mongoose')
var dbUrl = 'mongodb://';
if (settings.mongodb.username) dbUrl += settings.mongodb.username;
if (settings.mongodb.password) dbUrl += ':'+settings.mongodb.password;
if (settings.mongodb.username || settings.mongodb.password) +'@';
dbUrl += settings.mongodb.host+':'+settings.mongodb.port;
dbUrl += '/' + settings.mongodb.db;
mongoose.connect(dbUrl)

// Models
var fs = require('fs');
var models_path = __dirname + '/models'
fs.readdirSync(models_path).forEach(function (file) {
	console.log("Loading Model: "+file);
  	require(models_path+'/'+file)
})


  

var vtx=require('vtx').init(settings,__dirname,passport);
//var vtx=require('./../../../vtxcode/vtx').init(settings,__dirname,passport);
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
	//console.log(req.session);
	//console.log(req.user);
	global.handlers.page(req,res,next,"public/home");
}); 

// Account
app.get('/account', function(req,res,next) {
	global.handlers.page(req,res,next,"public/account");
}); 

// Login
app.get('/login', function(req,res,next) {
	global.handlers.page(req,res,next,"public/login");
}); 

// Register
app.get('/register', function(req,res,next) {
	global.handlers.page(req,res,next,"public/register");
}); 

// Admin Route
app.get('/admin', function(req,res,next) {
	global.handlers.page(req,res,next,"admin/home");
}); 

// Facebook Routes
app.get('/auth/facebook', 
	passport.authenticate('facebook',global.settings.social.facebook.scope));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));





app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// Profile with photo feed
app.get('/:id', function(req,res,next) {
	global.handlers.page(req,res,next,"public/person");
}); 




  
/**** VTX Handlers ****/
vtx.ajaxHandling();
vtx.errorHandling();



/*
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
*/