const Test = require("./app")

Test.listen(process.env.APP_PORT, () => {
	console.log(`server running ${process.env.APP_PORT}`);
});

process.on('SIGTERM', () => {
	console.info('SIGTERM signal received.');
	console.log('Closing http server.');
	Test.close(() => {
		console.log('Http server closed.');
	});
});