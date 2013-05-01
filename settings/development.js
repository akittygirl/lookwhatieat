

exports.settings={
	domain:'127.0.0.1:3001',
	sitelang:"en",
	timeformat:"",
	dateformat:"",
	datetimeformat:"",

	// Social Network OAuth2 Logins
	social: {
		facebook: {
			id: "",
			secret: ""
		}
	},

	// Postgres
	postgres: {
		driver: "pg",
      	user: "eat",
      	password: "eat",
      	host: "localhost",
      	database: "eat"
	}

}
