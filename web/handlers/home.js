
/*

[{},{},{}]

photoitem

item={
	href="",
	title="",
	src="",
	description="",
	date="",
	user="",
	likes=""
}

*/ 

var memberData 	= require('../persist/member');

global.handlers.addPage("page/home",function(req,res,cb) {
	/*
	var photo_items=[
		{ 
			href="", 
			title="",
			src="",
			description="",
			date="",
			user="",
			likes=""
		}, 
		{
			href="",
			title="",
			src="",
			description="",
			date="",
			user="",
			likes=""
		},
		{
			href="",
			title="",
			src="",
			description="",
			date="",
			user="",
			likes=""
		}
	];
	*/

	memberData.get(1,function(err,data) {
		if (err) {console.log(err);return cb(err);}
		return cb(null,{page:'home',title:'Home',user:data.member_id,photo_items:null});
	});
 

	
});



global.handlers.addReadCall("home-html",function(req,id,cb) {
	return cb(null,{"guess":parseInt(id)+1});
});
