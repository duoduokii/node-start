let count = 0;
for (let index = 2; index < process.argv.length; index++) {
	// count += +process.argv[index];
	count += Number(process.argv[index]);
}
console.log(count);
