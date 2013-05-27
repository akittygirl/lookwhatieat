

exports.settings={
	siteName:'Look What I Eat',
	domain:'dev.lookwhatieat.com',
	port:'3001',

	siteLang:"en",
	timeFormat:"",
	dateFormat:"",
	dateTimeFormat:"",

	// Social Network OAuth2 Logins
	social: {
		facebook: {
			id: "256004617878688",
			secret: "e4c33ca45d485aa21f778020d13f2320",
			scope: ["email","user_location","publish_actions","publish_stream"]
		}
	},

	sessionManagement: 'mongo',

	// Postgres
	/*
	postgres: {
		driver: "pg",
      	user: "eat",
      	password: "eat",
      	host: "localhost",
      	database: "eat"
	} 
	*/   
   
	mongodb: { 
		db: 'lookwhatieat',
	    host: 'melia',
	    port: 27017,
	    username: null,
	    password: null,
	    auto_reconnect: true
	}

}
  