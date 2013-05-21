_ = require('underscore');

exports.passMongooseErrors=function(errors,newErrors) {
	console.log(newErrors);
	_.each(newErrors.errors,function(err) {
		var f=err.path;
		var m=err.type;
		if (f=="hashed_password") f="password";
		errors.push({field:f,message:m});
	});
	return errors;
};

exports.addError=function(errors,field,message) {
	errors.push({field:field,message:message});
	return errors;
};