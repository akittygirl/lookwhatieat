
var Account = require('mongoose').model('Account');



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

	delete formData.confirm_password

	var account=new Account({
		email:formData.email,
		password:formData.password,
		active:true
	});

	account.save(function(err,_account) {
		if (err) return cb(null,{ok:false,saveError:err});

		// Need to create a session and log them in! (INCOMPLETE)


		return cb(null,{ok:true,redirect:"/"+_account.id});
	});

	
}); 


