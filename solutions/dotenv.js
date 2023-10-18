import { readFileSync } from 'fs';

export const config = (path = './.env') => {
	const env = readFileSync(path, 'utf8');
	const line = env.split('\n');
	line.forEach((element) => {
		const [key, ...value] = element.split('=');
		const joinedValue = value.join('=');
		const hasQuotes = joinedValue.startsWith('"') && joinedValue.endsWith('"'); // check for quotes at the beginning and end

		// remove quotes
		const store = hasQuotes
			? joinedValue.split('').slice(1, -1).join('')
			: joinedValue;
		process.env[key] = store;
	});
};
