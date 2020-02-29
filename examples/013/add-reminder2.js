require("colors");
const fs = require("fs");
const { JSON_WHITESPACE } = require("./constants");
const { reminders } = require("./.reminders");

const args = process.argv.slice(2);
let reminder = args[0];

if (reminder === undefined) {
	console.log("Pass a reminder");
	process.exit(0);
}

reminder = reminder.trim();

const hasReminderAlready = reminders.indexOf(reminder) > -1;

if (hasReminderAlready) {
	console.log(`You already have that reminder, ${reminder}, in the list`.red);
	process.exit(0);
}

reminders.push(reminder);

fs.writeFileSync(
	`${__dirname}/.reminders.json`,
	JSON.stringify({ reminders }, null, JSON_WHITESPACE)
);
console.log("Reminder has been added!".green);
