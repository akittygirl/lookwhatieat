

exports.settings={
	domain:'dev.lookwhatieat.com',
	domainPort:'3001',
	siteLang:"en",
	timeFormat:"",
	dateFormat:"",
	dateTimeFormat:"",

	// Social Network OAuth2 Logins
	social: {
		facebook: {
			id: "256004617878688",
			secret: "e4c33ca45d485aa21f778020d13f2320"
		}
	},

	// Postgres
	postgres: {
		driver: "pg",
      	user: "postgres",
      	password: "snoopy",
      	host: "localhost",
      	database: "eat"
	}

}
