
var Account = require('mongoose').model('Account');
var formLogic=require("../logic/form");


global.handlers.addPage("public/account",function(req,res,cb) {
	if (!req.isAuthenticated()) return cb(null,{redirect:"/login"});
	return cb(null,{page:'account',title:'Account'});
}); 

global.handlers.addPage("public/register",function(req,res,cb) {
	if (req.isAuthenticated()) return cb(null,{redirect:"/"});
	return cb(null,{page:'register',title:'Register'});
}); 

global.handlers.addCreateCall("account",function(req,res,formData,cb) {
	var vErrors=[];
	if (formData.password!=formData.confirm_password) {
		formLogic.addError(vErrors,"confirm_password",global.c("account","auth_confirm_password"));
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
		req.login(_account,function(err) {
			if (err) return cb(err);
			return cb(null,{ok:true,redirect:"/"+_account.id});
		});
	});
}); 

global.handlers.addCreateCall("login",function(req,res,formData,cb) {
	var vErrors=[];
	if (!formData.password.length) formLogic.addError(vErrors,"password",global.c("account","auth_password_blank"));
	if (!formData.email.length) formLogic.addError(vErrors,"email",global.c("account","auth_email_blank"));
	if (vErrors.length) return cb(null,{ok:false,errors:vErrors});

	Account.findOne({email:formData.email},function(err,account) {
		if (err) return cb(err);
		if (account && account.authenticate(formData.password)) {
			req.login(account,function(err) {
				if (err) return cb(err);
				return cb(null,{ok:true,redirect:"/"+account.id});
			});
		} else return cb(null,{ok:false,below_button_message:global.c("account","login_failed")});
	});
	
}); 
