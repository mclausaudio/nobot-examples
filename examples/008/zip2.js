const archiver = require("archiver"); // NPM package
const fs = require("fs");
const path = require("path");
// Below is just a setting
const ZLIB_BEST_COMPRESSION = 9;
// Below creates a file to stream archive data to
const zipPath = path.join(__dirname, "files.zip");
const output = fs.createWriteStream(zipPath);
// Below uses the archiver npm package, read more at their docs
const archive = archiver("zip", {
	zlib: { ZLIB_BEST_COMPRESSION }
});

// Listens for all archive data to be written, once the stream closes fire this callback
output.on("close", () => {
	console.log(`Total bytes: ${archive.pointer()}`);
	console.log(`Archiving has now finished.`);
});

// Handle anny errors
archive.on("error", err => {
	throw err;
});
// assign the stream output location
archive.pipe(output);

const textPath = path.join(__dirname, "copy.txt");
const logoPath = path.join(__dirname, "logo.jpg");
// append the files we want to include
archive.append(fs.createReadStream(textPath), { name: "content.txt" });
archive.append(fs.createReadStream(logoPath), { name: "nobot.jpg" });

// finalize and finish
archive.finalize();
