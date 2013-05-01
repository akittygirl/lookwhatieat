/*
	getContent 			c(set,id)  
	getContentSet       cs(set)
	getLookup           l(lookup,id)  			Lookups always base 1 indexing
	getLookupSet        ls(lookup)
	getCountryName  	cn(code)

	ago 				ago(date)
	formatDateTime  	fdt()
	formatDate 			fd()

*/

var _=require('underscore');
var moment = require('moment');

var setContentCache=[];
var setLookupCache=[];

var getContentSet=function(set) {
	if (!setContentCache[set]) {
		try {
			setContentCache[set]=require('./'+global.settings.siteLang+'/'+set);
		} catch(e) {
			console.log(e.code);
			if (e.code==("MODULE_NOT_FOUND")) {
				setContentCache[set]={};
			} else {
				throw(e);
			}
		}
	}
	return setContentCache[set];
};

var getLookupSet=function(set) {
	if (!setLookupCache[set]) {
		try {
			setLookupCache[set]=require('./'+global.settings.siteLang+'/lookups/'+set);
			//setLookupCache[set].unshift(null); // Put a null element at the beginning of the array to give it an index of 1

		} catch(e) {
			console.log(e.code);
			if (e.code==("MODULE_NOT_FOUND")) {
				setLookupCache[set]={};
			} else {
				throw(e);
			}
		}
	}
	return setLookupCache[set];
};

var getContent=function(set,id) {
	var s=getContentSet(set);
	if (s[id]) {
		return s[id];
	} else {
		return '['+set+'.'+id+']';
	}
};

var getLookup=function(lookup,id) {
	if (isNaN(id)) return '['+lookup+'.NaN]';
	var s=getLookupSet(lookup);
	id--;
	if (s[id]) {
		return s[id];
	} else {
		return '['+lookup+'.'+id+']';
	}
};


// Get a specific country name
var getCountryName=function(code) {
	var pos=_.indexOf(countryCodes,code.toUpperCase());
	if (pos==-1) return null;
	return getContentSet("country")[pos];
};

var countryCodes=[
		"WW", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ",
		"AR", "AS", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH",
		"BI", "BJ", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA",
		"CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU",
		"CV", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG",
		"EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "FX", "GA", "GB",
		"GD", "GE", "GF", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT",
		"GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN",
		"IO", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM",
		"KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS",
		"LT", "LU", "LV", "LY", "MA", "MC", "MD", "MG", "MH", "MK", "ML", "MM", "MN",
		"MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA",
		"NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA",
		"PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY",
		"QA", "RE", "RO", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI",
		"SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "SZ", "TC", "TD",
		"TF", "TG", "TH", "TJ", "TK", "TM", "TN", "TO", "TL", "TR", "TT", "TV", "TW",
		"TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN",
		"VU", "WF", "WS", "YE", "YT", "RS", "ZA", "ZM", "ME", "ZW", 
		"AX", "GG", "IM", "JE", "BL", "MF"
	];

// Attach to the global scope as it is used everywhere!


if (!global.getContentSet) {
	global.getContentSet=function(set) {
		return getContentSet(set);
	}
	global.cs=global.getContentSet;
};

if (!global.getContent) {
	global.getContent=function(set,id) {
		return getContent(set,id);
	}
	global.c=global.getContent;
};

if (!global.getLookup) {
	global.getLookup=function(set,id) {
		return getLookup(set,id);
	}
	global.l=global.getLookup;
};

if (!global.getLookupSet) {
	global.getLookupSet=function(set) {
		return getLookupSet(set);
	}
	global.ls=global.getLookupSet;
};

// Attach to the global scope as it is used everywhere!
if (!global.cn) {
	global.getCountryName=function(code,lang) {
		return getCountryName(code,lang);
	}
	global.cn=global.getCountryName;
};

if (!global.formatDate) {
	global.formatDate=function(date,style) {
		if (!style) style="full";
		if (style=="full") return moment(date).utc().format('MMMM Do YYYY');
		if (style=="short") return moment(date).utc().format('DD-MMM-YYYY');
	}
	global.fd=global.formatDate;
};

if (!global.formatDateTime) {
	global.formatDateTime=function(date,style) {
		if (!style) style="full";
		if (style=="full") return moment(date).utc().format('MMMM Do YYYY, h:mm:ss a');
		if (style=="short") return moment(date).utc().format('DD-MMM-YYYY h:mm:ss a');
		if (style=="shorttime") return moment(date).utc().format('DD-MMM-YYYY ha');
	}
	global.fdt=global.formatDateTime;
};


if (!global.daysHours) {
	global.daysHours=function(start_date,end_date) {
		var days=moment.duration(moment(end_date).diff(start_date)).days();
		var hours=moment.duration(moment(end_date).diff(start_date)).hours();
		var s="";
		if (days) s=s+String(days)+" days ";
		if (hours) s=s+String(hours)+" hours";

		return s;
	}
};



if (!global.ago) {
	global.ago=function(date) {	
		return moment(date).fromNow();
	}
};