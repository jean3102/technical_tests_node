// import fs from 'fs';

// with callback
// function getFile(callback) {
// 	const readFileContent = (error, content) => {
// 		if (error) return callback(error.message);
// 		writeFileContent(content);
// 	};

// 	const writeFileContent = (content) => {
// 		const textProcessed = content.toUpperCase();
// 		fs.writeFile('./files/output.txt', textProcessed, (error) => {
// 			if (error) return callback(error.message);
// 			callback(null, 'The file was processed and saved');
// 		});
// 	};

// 	fs.readFile('./files/input.txt', 'utf8', readFileContent);
// }

// getFile((error, res) => {
// 	if (error) console.error(error);
// 	else console.log(res);
// });

// with async
import { readFile, writeFile } from 'fs/promises';

async function getFile() {
	try {
		const content = await readFile('./files/input.txt', 'utf8');
		const textProcessed = content.toUpperCase();

		await writeFile('./files/output.txt', textProcessed);
	} catch (error) {
		console.log(`🚀 error:`, error);
	}
}

await getFile();
