//var	util 		= require('util');

var passport = require('passport');
var facebook = require('passport-facebook').Strategy;
var Account = require('mongoose').model('Account');


var facebookStrategy = new facebook(
{
    passReqToCallback: true,
    clientID: global.settings.social.facebook.id,
    clientSecret: global.settings.social.facebook.secret,
    callbackURL: "http://"+global.settings.domain+":"+global.settings.port+"/auth/facebook/callback"
}, function(req,accessToken, refreshToken, profile, cb) {

	//Account.find()
	//console.log(profile);

	Account.findOne({'provider':'facebook','facebook.id':profile.id}, function(err,user) {
		if (err) return cb(err);

		if (!user) {
			
			user = new Account({
				email:profile._json.email,
				provider:'facebook',
				name:profile._json.name,
				gender:profile._json.gender,
				timezone:profile._json.timezone,
				facebook:{
					id: profile._json.id,
					link: profile._json.link,
					username: profile._json.username,
					location: profile._json.location,
					locale: profile._json.locale,
					verified: profile._json.verified,
					accessToken:accessToken
				}
			});

			//console.log(user);

			user.save(function(err,newUser) {
				if (err) return cb(err);
				console.log("Created Account: "+newUser.id);
				cb(null,newUser);
			});
			
		} else {
			console.log("Found Account: "+user.id);
			cb(null,user);
		}
	});

  	//console.log("Authenticated! "+accessToken);
  	//console.log(profile);
  	
});


passport.use(facebookStrategy);


passport.serializeUser(function(user, done) {
  	done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  	Account.findById(id,function(err,user) {
  		if (err) return done(err);
  		done(null, user);
  	});
});
