var check 		= require('validator').check,
	_ 			= require('underscore'),
	moment 		= require('moment');

// Validate an entire form at once
// Not async - no database checking
var form=function(data,errors) {

	// Date of Birth (Need to check a bunch of stuff)
	/*
	if (!data.dob && data.dob_d!=null && data.dob_m!=null && data.dob_y!=null) {
		if (data.dob_d>0 && data.dob_d<=31 && (data.dob_m-1)>0 && (data.dob_m-1)<=12 && data.dob_y>1800) {
			var dd = new Date(data.dob_y, data.dob_m, 0);
			if (data.dob_d>dd.getDate()) {
				errors.push("dob_d");
			} else {
				data.dob=new Date();
				data.dob.setFullYear(data.dob_y);
				data.dob.setMonth(data.dob_m-1);
				data.dob.setDate(data.dob_d);
			}
		} else {
			errors.push("dob_d");
		}
	}

	


	*/


	/* Create start_date and end_date 
		start_date_part
		start_time_part
		end_date_part
		end_time_part

		Database default is UTC
	*/

	if (data.start_date_part && data.start_time_part) {
		data.start_date=moment(data.start_date_part,"DD-MM-YYYY");
		data.start_date.hours(data.start_time_part);
		data.start_date=data.start_date.format("LLLL");
	}


	if (data.end_date_part && data.end_time_part) {
		data.end_date=moment(data.end_date_part,"DD-MM-YYYY");
		data.end_date.hours(data.end_time_part);
		data.end_date=data.end_date.format("LLLL");
	}
	
	if (data.start_date && data.end_date) {
		var d=moment(data.end_date).diff(moment(data.start_date));
		var hours=moment.duration(d).asHours();
		console.log(hours);
		if (hours < 1) {
			errors.push("end_date_part");
		}
	}

	// All the other fields
	_.each(data,function(v,e) {
		data[e]=field(e,v,errors);
		//console.log(e+"="+v+" ("+data[e]+")");
	});

	// Confirm Password
	if (data.confirm_password!=null) {
		if (data["confirm_password"]!==data["password"]) {
			errors.push("confirm_password");
		}
	}

}


// Centralised validation
// Not async - no third party calls!
// Error is an array of errors that will get pushed
// Returns a formatted version
var field=function(fld,value,errors) {
	
	switch(fld) {

		case 'topic_title': 
			try {check(value).len(1,100);} 
				catch(e) {errors.push(fld);}
		break;

		case 'topic_text': 
			try {check(value).len(1,1000);} 
				catch(e) {errors.push(fld);}
		break;

		/*
		case 'topic_country': 
			
		break;
		*/


		case 'topic_status_id': 
			try {
				check(value).isInt();
				if (value<1 || value>7) errors.push(fld);
			} 
			catch(e) {errors.push(fld);}
		break;

		case 'topic_style_id': 
			try {
				check(value).isInt();
				if (value<1 || value>6) errors.push(fld);
			} 
			catch(e) {errors.push(fld);}
		break;

		case 'topic_type_id': 
			try {
				check(value).isInt();
				if (value<1 || value>5) errors.push(fld);
			} 
			catch(e) {errors.push(fld);}
		break;

		case 'topic_start': 
			
		break;

		case 'topic_end': 
			
		break;


		case 'email_address':
			value=defaultIt(value,"").toLowerCase();
			try {check(value).isEmail().len(3,30);} 
				catch(e) {errors.push(fld);}
		break;

		case 'password':
			value=defaultIt(value,"");
			try {check(value).regex(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/);} 
				catch(e) {errors.push(fld);}
		break;

		case 'nickname':
			value=defaultIt(value,"");
			if (!value.length) errors.push(fld);
		break;
 
		case 'gender':
			value=value.toLowerCase();
			if (value!="m" && value!="f") errors.push(fld);
		break;

		case 'country': // This is the country name / corrects the case
			var ok=_.indexOf(global.settings.countries,value);
			if (ok==-1) errors.push(fld);

			/*
			var country=_.find(global.countryNames,function(x) {
				return value.toLowerCase().trim()==x.toLowerCase().trim();
			});
			if (country) {
				var pos=_.indexOf(content.countryNames,country);
				value=content.countryCodes[pos]; 
				console.log(value);
			} else errors.push(fld);
			*/
		break;

		case 'location':
			value=defaultIt(value,"");
			try {check(value).len(0,50);} 
				catch(e) {errors.push(fld);}
		break;

		case 'occupation':
			value=defaultIt(value,"");
			try {check(value).len(0,50);} 
				catch(e) {errors.push(fld);}
		break;

		case 'qualifications':
			value=defaultIt(value,"");
			try {check(value).len(0,50);} 
				catch(e) {errors.push(fld);}
		break;

		case 'description':
			value=defaultIt(value,"");
			try {check(value).len(0,1000);} 
				catch(e) {errors.push(fld);}
		break;

		default: // Assume other fields are optional text fields
			//value=defaultIt(value,"");
		break;

	}

	return value;
};

var defaultIt=function(s,d) {
	if (!s) s=d;
	if (s.replace) s.replace(/^\s*|\s*$/g, '');
    return s;
}

exports.field=field;
exports.form=form;
exports.defaultIt=defaultIt;