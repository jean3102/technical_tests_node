function getDataPromise() {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve({ info: 'all data' });
		}, 2000)
	);
}

//Promise.then()
getDataPromise()
	.then(({ info }) => {
		console.log(`🚀info:`, info);
	})
	.catch((error) => {
		console.log(`🚀error:`, error);
	});

//await
try {
	const { info } = await getDataPromise();
	console.log(`🚀info:`, info);
} catch (error) {
	console.log(`🚀error:`, error);
}
