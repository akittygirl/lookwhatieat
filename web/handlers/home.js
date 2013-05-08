
var memberData 	= require('../persist/member');

global.handlers.addTemplate("page/home",function(req,res,cb) {


	memberData.get(1,function(err,data) {
		if (err) {console.log(err);return cb(err);}
		return cb(null,{page:'home',title:'Home',user:data.member_id});
	});
 

	
});

