const args = process.argv.slice(2);
const [name] = args;

if (name === undefined) {
	console.log('Please pass in a name by running "node hello2.js "NAME_HERE"');
	process.exit(0);
}

console.log(`Hello, ${name}`);
