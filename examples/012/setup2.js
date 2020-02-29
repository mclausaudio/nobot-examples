require("colors");
const shell = require("shelljs");
const { repository } = require("./config");

const { delivery } = repository;

shell.cd(__dirname);

shell.exec(`git clone ${delivery} --progress`);
