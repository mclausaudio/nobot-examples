require("colors");

const { ERROR, WARNING, SUCCESS } = require("../constants/message-types2");

module.exports = function log(message, type) {
	let colorMessage;
	switch (type) {
		case ERROR:
			colorMessage = `[ERROR] ${message.red}`;
			break;
		case WARNING:
			colorMessage = `[WARNING] ${message.yellow}`;
			break;
		case SUCCESS:
			colorMessage = `[SUCESS] ${message.green}`;
			break;
		default:
			colorMessage = `[INFO] ${message}`;
			break;
	}
	console.log(colorMessage);
};
