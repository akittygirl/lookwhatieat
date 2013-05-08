/*
	Version Control! Accept-Version

	GET /user/facebook-check/:facebookid/:accesstoken 			Check a user's facebookid/accesstoken is already registered and return their userid
														Update the access token if necessary (but never return the access token)
			{exists:true,user_id:???} {exists:false}



	POST /user/new
	

	user/facebook-login-check
		facebookid
		accesstoken

	user/direct-login-check
		email
		password (encrypted and timestamped)

	Check if facebookid user exists
	Validate the token server side against facebook
	Check if the accesstoken needs updating
	If all good, then generate a userkey (uuid)
	userkey will expire 1 hour after the last request that uses it
	If expires then the client should automatically re-authorize
*/


var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});


