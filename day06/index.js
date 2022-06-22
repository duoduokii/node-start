const myModule = require("./filterMd");

const folder = process.argv[2];
const ext = process.argv[3];

myModule(folder, ext, (err, data) => {
	if (err) return console.log(err);
	data.forEach((file) => console.log(file));
});
