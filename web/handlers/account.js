
var Account = require('mongoose').model('Account');
var formLogic=require("../logic/form");


global.handlers.addPage("page/account",function(req,res,cb) {
	return cb(null,{page:'account',title:'Account'});
}); 

global.handlers.addPage("page/register",function(req,res,cb) {
	return cb(null,{page:'register',title:'Register'});
}); 


global.handlers.addCreateCall("account",function(req,res,formData,cb) {

	var vErrors=[];


	if (formData.password!=formData.confirm_password) {
		formLogic.addError(vErrors,"confirm_password","Passwords do not match.");
		return cb(null,{ok:false,errors:vErrors});
	}

	delete formData.confirm_password

	var account=new Account({
		email:formData.email,
		password:formData.password,
		active:true
	});

	account.save(function(err,_account) {
		if (err) {
			formLogic.passMongooseErrors(vErrors,err);
			return cb(null,{ok:false,errors:vErrors});
		}
		// Need to create a session and log them in! (INCOMPLETE)


		return cb(null,{ok:true,redirect:"/"+_account.id});
	});

	
}); 


