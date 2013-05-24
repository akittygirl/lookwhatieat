

global.handlers.addPage("public/login",function(req,res,cb) {
	if (req.isAuthenticated()) return cb(null,{redirect:"/"});

	return cb(null,{page:'login',title:'Login'});
});   

