export async function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

delay(3000).then(() => console.log('hello Word'));
// or..
await delay(3000);
console.log('hello Word');
