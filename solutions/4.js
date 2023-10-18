import fs from 'fs/promises';

export async function radFiles() {
	console.time('readFile');

	const [file1, file2, file3] = await Promise.all([
		fs.readFile('./files/file1.txt', 'utf8'),
		fs.readFile('./files/file2.txt', 'utf8'),
		fs.readFile('./files/file3.txt', 'utf8'),
	]);

	console.timeEnd('readFile');
	return `${file1} ${file2} ${file3}`;
}

try {
	const res = await radFiles();
	console.log(`🚀 ------------ res:`, res);
} catch (error) {
	console.log(`🚀 ------------ error:`, error);
}

