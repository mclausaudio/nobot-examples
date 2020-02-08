console.log(`This process is ${process.pid}`);

process.on("exit", exitCode => {
	console.log(`The process has finished with an exit code of ${exitCode}`);
});

// process.stdout (standard out) is a simpler version of console.log
// Unlike console.log, you'll need to \n at the end of the line
process.stdout.write("I am writing in standard out\n");

process.stdout.write(`Currently working in:
${process.cwd()}\n`);

process.stdout.write(
	`This script has been running for ${process.uptime()} seconds`
);

// standard in
process.stdout.write("Type something then hit enter \n");

process.stdin.setEncoding("utf8");

process.stdin.on("readable", () => {
	const chunk = process.stdin.read();
	if (chunk !== null) {
		process.stdout.write(`You wrote ${chunk}`);
		process.exit(0);
	}
});
