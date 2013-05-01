

var express = require('express');
var app = express();
//var passport = require('passport');

//var database_json = require('./database');



//everyauth.helpExpress(app);



//social.configAuth(settings.social);

var db=settings.postgres;
global.conString="tcp://"+db.user+":"+db.password+"@"+db.host+"/"+db.database;



//var social = require('./logic/social');

exports.init = function(port) {

		app.configure(function(){
			app.set('views', __dirname + '/views');
			app.set('view engine', 'ejs');

			 // delete express.bodyParser.parse['multipart/form-data'];

			app.use(express.cookieParser('vortexo13'));
			app.use(express.bodyParser());

			var RedisStore = require('connect-redis')(express);
			
			app.use(express.session({ store: new RedisStore }));
			//app.use(passport.initialize());
			

			app.use(express.methodOverride());
			app.use(express.static(__dirname + '/static'));
			app.use(express.favicon());
				
			//app.use(passport.session());
			

			//app.use(everyauth.middleware());
			app.use(app.router);

			app.enable("jsonp callback");
 
		});

		
		var server=app.listen(port);

		console.log("Topic Bash - Port: %d - %s", server.address().port, app.settings.env);

		return app;
}

