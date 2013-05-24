
global.handlers.addPage("public/home",function(req,res,cb) {
	
	var photo_items=[
		{
			href:'/',
			title:"Melia 1",
			src:"/images/fb1.jpg",
			description:"very pretty girl Melia",
			date:"1 June 2010",
			user:"mimi",
			likes:"2"
		},
		{
			href:"",
			title:"Melia 2",
			src:"/images/fb2.jpg",
			description:"very pretty girl Melia",
			date:"1 June 2010",
			user:"mimi",
			likes:"566"
		},
		{
			href:"",
			title:"Melia 3",
			src:"/images/fb3.jpg",
			description:"very pretty girl Melia",
			date:"1 June 2010",
			user:"mimi",
			likes:"123"
		},
		{
			href:"",
			title:"Melia 3",
			src:"/images/fb4.jpg",
			description:"very pretty girl Melia",
			date:"1 June 2010",
			user:"mimi",
			likes:"1234"
		},	
		{
			href:"",
			title:"Melia 3",
			src:"/images/fb5.jpg",
			description:"very pretty girl Melia",
			date:"1 June 2010",
			user:"mimi",
			likes:"1234"
		}				
	];

	return cb(null,{page:'home',title:'Home',photo_items:photo_items});

});


global.handlers.addReadCall("home-html",function(req,id,cb) {
	return cb(null,{"guess":parseInt(id)+1});
});
