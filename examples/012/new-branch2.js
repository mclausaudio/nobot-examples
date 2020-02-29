const shell = require("shelljs");
const readLineSync = require("readline-sync");
const path = require("path");
const { repository } = require("./config");

const { delivery, baseBranch } = repository;
const repoName = delivery.substring(delivery.lastIndexOf("/"));

const repoPath = path.join(__dirname, repoName);
shell.cd(repoName);

shell.exec(`git checkout ${baseBranch}`);

// Make sure you have the latest changes
shell.exec(`git pull origin ${baseBranch}`);

// get Ticket info, we pass in an additional options object
// the limit property is a check to see if the user input meets a certain validation requirement.
// It could be a regular expression or function
// limitMessage is displayed if the user failed limit checl
const ticketId = readLineSync.question("What is the ticket ID? ", {
	limit: input => input.trim().length > 0,
	limitMessage: "Please enter a ticket ID"
});

shell.exec(`git checkout -b ${ticketId}`);
