# Technical tests in node

Write the solutions to the `solutions/index.js` file keeping the name of the functions and their `export`. Use `ESModules` in your Node.js project
1 - Fix this function so that the code below works as expected:

```javascript
import net from 'node:net';

export const ping = (ip) => {
	const startTime = process.hrtime();

	const client = net.connect({ port: 80, host: ip }, () => {
		client.end();
		return { time: process.hrtime(startTime), ip };
	});

	client.on('error', (err) => {
		throw err;
		client.end();
	});
};

ping('google.com', (err, info) => {
	if (err) console.error(err);
	console.log(info);
});
```

2 -Transform the following function so that it works with promises instead of callbacks:

```javascript
export function getDataPromise(callback) {
	setTimeout(() => {
		callback(null, { data: 'all data' });
	}, 2000);
}
```

3 - Explain what the function does. Identify and correct errors in the following code. If you see something unnecessary, delete it. Then improve it so that it still works with callback and then do what you consider to improve its readability.

```javascript
function getFile() {
	fs.readFile('./files/input.txt', 'utf8', (error, content) => {
		if (error) {
			console.error('Error when write file:', error.message);
			return false;
		}

		setTimeout(() => {
			const textProcessed = content.toUpperCase();

			fs.writeFile('./files/output.txt', textProcessed, (error) => {
				if (error) {
					console.error('Error when save file:', error.message);
					return false;
				}

				console.log('The file was processed and saved');
				return true;
			});
		}, 1000);
	});
}
```

4 - ¿How would you improve the following code and why?.

```javascript
export function radFiles() {
	console.time('readFile');
	const file1 = fs.readFileSync('./files/file1.txt', 'utf8');
	const file2 = fs.readFileSync('./files/file2.txt', 'utf8');
	const file3 = fs.readFileSync('./files/file3.txt', 'utf8');

	console.timeEnd('readFile');
	return `${file1} ${file2} ${file3}`;
}
radFiles();
```

5 - Write a `delay` function that returns a promise that resolves after `n` milliseconds. For example:

```javascript
export async function delay() {
	// ...
}

delay(3000).then(() => console.log('hello word'));
// o..
await delay(3000);
console.log('hello word');
```

6. Let's create our own `dotenv` utility in the `dotenv.js` file.

- The utility should return a `config` method that reads the `.env` file and adds any environment variables in the file to the `process.env` object.

- For example if your `.env` file contains:

```sh
PORT=8080
TOKEN="123abc"
```
Then we could do this:

```javascript
const dotenv = require('./dotenv.js');
dotenv.config();

console.log(process.env.PORT); // "8008"
console.log(process.env.TOKEN); // "123abc"
```

You can also pass the path of the `.env` file as a parameter:

```javascript
const dotenv = require('./dotenv.js');
dotenv.config('./config/.env.local');
```

Things to keep in mind:

- Only the `fs` module is allowed to be used to read the file.
- If the file does not exist, it should not give an error, it simply does nothing.
- If the file exists, but does not have any environment variables, you should do nothing.
- It should only support the `.env` file or the one passed to it as a parameter, it does not need to support `.env.local`, `.env.development` and similar automatically.
- Environment variables are always strings, so if there is a number in the `.env` file, for example `PORT=8080`, when reading it with `fs` and adding it to `process.env` it must be a string , not a number.
- `process.env` is an object and is therefore mutable. This means that we can add new properties without problems.

7 - Design a REST API using Express that allows users to create, read, modify, update and delete items from a list.

The list will have objects that have the following form:

```javascript
{
  id: 1,
  content: 'Item 1'
}
```

Make the solution in the `solutions/server.js` file and export the created `app` and `server`.
Install Express with `npm install express`. Don't worry about CORS.
