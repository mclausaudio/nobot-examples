const url = require("url");
const args = process.argv.slice("2");
const [urlEntered] = args;

if (urlEntered === undefined) {
	console.error("Please pass in a url");
	process.exit(0);
}

const { protocol, slashes, host, query, href } = url.parse(urlEntered);

console.log(`Here is the protocol: ${protocol}`);
console.log(`Here is the slashes: ${slashes}`);
console.log(`Here is the host: ${host}`);
console.log(`Here is the query: ${query}`);
console.log(`Here is the href: ${href}`);
