//var	util 		= require('util');

var persMember	= require('../persist/member');

var passport = require('passport');
var facebook = require('passport-facebook').Strategy;

var facebookStrategy = new facebook(
{
    passReqToCallback: true,
    clientID: global.settings.social.facebook.id,
    clientSecret: global.settings.social.facebook.secret,
    callbackURL: "http://"+global.settings.domain+":"+global.settings.port+"/auth/facebook/callback"
}, function(req,accessToken, refreshToken, profile, cb) {
  	console.log("Authenticated! "+accessToken);
  	console.log(profile);
  	cb(null,{id:profile.id});
});

passport.use(facebookStrategy);

/*
passport.use(new FacebookStrategy({
	passReqToCallback: true,
    clientID: global.settings.social.facebook.id,
    clientSecret: global.settings.social.facebook.secret,
    callbackURL: "http://"+global.settings.domain+"/auth/facebook/callback"
  },
  function(req,accessToken, refreshToken, profile, cb) {

  		console.log("Authenticated!");
  		console.log(profile);

  		
  		persMember.check(profile.id,function(err,exists) {
  			if (err) return cb(err);
  			//console.log("AccessToken:"+accessToken);
			//console.log(profile);
			if (exists) {
				console.log("Existing user login: "+profile.displayName);

				// Get the user details from the database
				persMember.get(profile.id,function(err,user) {
					if (err) return cb(err);
					user.id=profile.id;

					// Check if the token has changed
					if (user.token!=accessToken) {
						console.log("Token requires update: "+profile.displayName+" "+accessToken);
						persMember.updateToken(id,accessToken,function(err) {
							if (err) return cb(err);
							cb(null,user);
						});
					} else {
						cb(null,user);
					}
				});

			} else {
				console.log("New user registration: "+profile.displayName);

				var user={
					id:profile.id,
					name:profile.displayName,
					gender:profile.gender.substr(0,1) || null,
					email:profile.emails[0].value,
					description:"",
					token:accessToken
				};

				persMember.insert(user,function(err,member_id) {
					if (err) return cb(err);
					user.member_id=member_id;
					cb(null,user);
				});

			}
			
			
  		});
  }
));
*/

// Should not store the whole data in the session
// This needs to go in the database

passport.serializeUser(function(user, done) {
	// Save in the database
	//console.log("Serializing User");
  	done(null, user);
});

passport.deserializeUser(function(obj, done) {
  //User.findOne(id, function (err, user) {
  	//console.log(obj);
    done(null, obj);
 // });
});





/*
var configAuth=function(settings) {
	
	everyauth.everymodule

	// This is the data that goes into req.user
	  .findUserById( function (id, callback) {



	  	user={id:id};
	    callback(null, user);
	  });

	everyauth.everymodule.handleLogout( function (req, res) {
		req.logout(); 
	 	//request.logout(req);
		this.redirect(res, this.logoutRedirectPath());
	});

	everyauth.facebook
		.entryPath('/auth/facebook')
  		.callbackPath('/auth/facebook/callback')
	    .appId(settings.facebook.id)
	    .appSecret(settings.facebook.secret)
	    .authQueryParam('display', 'popup')
	    .handleAuthCallbackError( function (req, res) {
	    	res.redirect('/');
	    })
	    .redirectPath("/")
	    .scope('email,user_location,publish_actions')      

	    .findOrCreateUser(function(session, accessToken, accessTokExtra, fbUserMetadata) {
	    	var promise = this.Promise();

	    	//console.log(promise);

	    	// If this person doesn't exist then create the account
	    	data.checkUser(fbUserMetadata.id,function(err,exists) {
	    	//	if (err) {
	    			//promise.fail(err);
	    	//	} else {
	    			promise.fulfill({id:fbUserMetadata.id});
	    	//	}

	    		
	    	});

	    	return promise;
	    });



	    	// Otherwise update the account with the new information






	    	//console.log(util.inspect(fbUserMetadata));
	    	//var promise = this.Promise()
	    	
	    	var data = {};
	    	data.nickname=fbUserMetadata.first_name;
	    	data.location=fbUserMetadata.location.name;
	    	data.picture="https://graph.facebook.com/"+fbUserMetadata.id+"/picture/?type=large";
	    	if (fbUserMetadata.gender=="male") data.gender="m";
	    	if (fbUserMetadata.gender=="female") data.gender="f";
	    	data.email_address=fbUserMetadata.email;
			data.oauth_external_id=fbUserMetadata.id;
			
			//authSocialAccount(data,promise);



			
				
	 


}

var authSocialAccount=function(data,promise) {

	return promise.fulfill({id:0});

	/*
	dataMember.getOAuthMember(data.oauth_type_id,data.oauth_external_id,function(err,member_id) {
		if (err) {
			console.log(err);
			return promise.fulfill({id:0});
		}

		console.log("Found Member: "+member_id);

		if (member_id) {
			promise.fulfill({id:member_id});
		} else {
			dataMember.createMember(data,function(member_id,err) {
				if (err) { 
					console.log(err);
					promise.fulfill({id:0});
				} else {
					console.log("New Member: "+member_id);
					promise.fulfill({id:member_id});
				}
			});
		}

	});
	

}


exports.configAuth=configAuth;
*/


