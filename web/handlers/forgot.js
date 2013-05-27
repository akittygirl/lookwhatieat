
global.handlers.addPage("public/forgot",function(req,res,cb) {
	if (req.isAuthenticated()) return cb(null,{redirect:"/"});

	return cb(null,{page:'forgot',title:'Forgot Login'});
});   

