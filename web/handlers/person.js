var Account = require('mongoose').model('Account');


global.handlers.addPage("public/person",function(req,res,cb) {

	Account.findById(req.params.id,function(err,acc) {
		// If can't find then need to search by username
		// If still can't find then throw a 404 error!
		return cb(null,{page:'person',title:'Person',account:acc});
	});

	
}); 
