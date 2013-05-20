
global.handlers.addPage("page/account",function(req,res,cb) {
	return cb(null,{page:'account',title:'Account'});
}); 

global.handlers.addPage("page/register",function(req,res,cb) {
	return cb(null,{page:'register',title:'Register'});
}); 


global.handlers.addCreateCall("account",function(req,res,formData,cb) {

	if (formData.password!=formData.confirm_password) {
		return cb(null,{ok:false,message:"The passwords don't match."});
	}

	


	
}); 
