const fs = require("fs");
const path = require("path");

// const path = process.argv[2];
// const filterExtend = process.argv[3];

// fs.readdir(path, (err, list) => {
// 	if (err) throw err;
// 	list.forEach((item) => {
// 		if (item.split(".")[1] === filterExtend) {
// 			console.log(item);
// 		}
// 	});
// });

// update

const folder = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(folder, (err, list) => {
	if (err) throw err;
	list.forEach((file) => {
		if (path.extname(file) === ext) {
			console.log(file);
		}
	});
});
