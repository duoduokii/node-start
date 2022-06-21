// TODO node 路径取值
// https://segmentfault.com/a/1190000009368204
const fs = require("fs");
// const path =  || "./mock/test.md";
// fs.readFile(process.argv[2], (err, data) => {
// 	if (err) throw err;
// 	console.log(data.toString().split("\n").length - 1);
// });
const buffer = fs.readFileSync(process.argv[2]);

console.log(buffer.toString().split("\n").length - 1);
