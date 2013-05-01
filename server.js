
var app 		= require('./app').init(4000);
var express 	= require('express');
var content 	= require('./content/content');
var handlers 	= require('./logic/handlers');
var request		= require('./logic/request');
var scheduler	= require('./logic/scheduler');
var _   		= require('underscore');
var passport 	= require('passport');

// Start the scheduler
scheduler.process();
var schedulerTimer = setInterval(scheduler.process,30000);

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



// Previous Topics

// About 

// Privacy Policy

// Terms of Service

// Media Enquiries

// What's New

// Contact Us

// Country
app.get('/country/:cc', function(req,res,next) {
	if (req.params.cc.toUpperCase()!=req.session.country) {
		var i=_.indexOf(global.settings.countries,req.params.cc.toUpperCase());
		if (i>=0) {
			req.session.country=req.params.cc.toUpperCase();
		} else {
			req.session.country="WW";
		}
	} 
	handleTemplateRequest(req,res,next,"page/home");
});

// Facebook Routes
app.get('/auth/facebook', 
	passport.authenticate('facebook',{ scope: ["email","user_location","publish_actions"]}));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

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


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

/*
var request 		= require('./request'),
	handlers		= require('./modules-base/handlers');

var content 		= require('./modules-site/site-content').getContent();

// Attach all the handlers
var sitePhoto=require('./modules-site/site-photo');
require('./modules-site/site-home');
require('./modules-site/site-about');
require('./modules-site/site-login');
require('./modules-site/site-signup');
require('./modules-site/site-profile');
require('./modules-site/site-topics');
require('./modules-site/site-signup');

// res will be the template
var handleTemplateRequest=function(req,res,next,template) {
	handlers.execTemplate(req,res,template,"layout",function(err,html) {
		if (err) return next(err);
		console.log("Template: "+template);
		res.format({
			'text/html': function() {return res.send(html);},
			'appliation/json': function() {
				res.contentType('json');
				return res.send({ html: html });
			}
		});
	});
};

// Template action calls
handlers.addAction("template",function(req,res,cb) {
	console.log("Action Template: "+req.body.template);
	handlers.execTemplate(req,res,req.body.template,null,function(err,html) {
		if (err) return cb(err);
		res.format({
			'appliation/json': function() {
				res.contentType('json');
				return res.send({ html: html });
			}
		});
	});
});

// Session Preparation
app.all('*',function(req,res,next) {
	request.prepare(req,res,function(err) {
		if (err) return new next(err);
		return next();
	});
});
  

app.get('/home', function(req,res,next) {
	handleTemplateRequest(req,res,next,"page/home");
});



app.get('/au', function(req,res,next) {
	request.setCountry(req,res,"AU",function() {
		handleTemplateRequest(req,res,next,"page/home");	
	});
});

app.get('/uk', function(req,res,next) {
	request.setCountry(req,res,"GB",function() {
		handleTemplateRequest(req,res,next,"page/home");
	});
});

app.get('/us', function(req,res,next) {
	request.setCountry(req,res,"US",function() {
		handleTemplateRequest(req,res,next,"page/home");
	});
   	
});

app.get('/ww', function(req,res,next) {
	request.setCountry(req,res,"WW",function() {
		handleTemplateRequest(req,res,next,"page/home");
	});
});

app.get('/profile/:profile_id', function(req,res,next) {
    handleTemplateRequest(req,res,next,"page/profile");
});

app.get('/about', function(req,res,next) {
     handleTemplateRequest(req,res,next,"page/about");
});

app.get('/topics', function(req,res,next) {
    handleTemplateRequest(req,res,next,"page/topics");
});

app.get('/new-topic', function(req,res,next) {
    handleTemplateRequest(req,res,next,"page/topics/new-topic");
});


app.get('/signup', function(req,res,next) {
     handleTemplateRequest(req,res,next,"page/signup");
});



app.post('/upload/:id', function(req, res, next) {
	console.log("Receiving File: "+req.params.id);
	sitePhoto.uploadPhoto(req,function(err,data) {
		if (err) return next(err);
		res.send(JSON.stringify(data));
	});
});


app.post('/ajax/:action', express.bodyParser(), function(req, res,next) {
	var action=req.params.action;
	console.log("Action: "+action);
	handlers.execAction(req,res,action,function(err,data) {
		if (err) return next(err);
		res.format({
			'appliation/json': function() {
				res.contentType('json');
				return res.send(data);
			}
		})
	});
});
 



*/