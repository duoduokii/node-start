const fs = require("fs");

fs.readFile(process.argv[2], (err, buffer) => {
	if (err) throw err;
	console.log(buffer.toString().split("\n").length - 1);
});
