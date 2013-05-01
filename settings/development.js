

exports.settings={
	domain:'127.0.0.1',
	domainPort:'3001',
	siteLang:"en",
	timeFormat:"",
	dateFormat:"",
	dateTimeFormat:"",

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
