var pg = require('pg');

var get=function(id,cb) {
	pg.connect(global.conString, function(err, client) {
		if (err) return cb(err);
		client.query("SELECT member_id FROM member WHERE member_id = $1",[id], function(err, result) {
			if (err) return cb(err);
			data=result.rows[0];
			return cb(null,data);
		});
	});
};

exports.get=get;
