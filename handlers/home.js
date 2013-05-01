var handlers 	= require('../logic/handlers');

handlers.addTemplate("page/home",function(req,res,cb) {
	return cb(null,{page:'home',title:'Home'});
});

