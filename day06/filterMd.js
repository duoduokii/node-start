const fs = require("fs");
const path = require("path");

module.exports = function (dir, ext, cb) {
	ext = "." + ext;
	fs.readdir(dir, (err, data) => {
		if (err) return cb(err);
		data = data.filter((file) => path.extname(file) === ext);
		cb(null, data);
	});
};
