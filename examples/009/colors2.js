const log = require("./helpers/log2");
const { ERROR, WARNING, SUCCESS } = require("./constants/message-types2");

log("This is a success message", SUCCESS);
log("This is a warning", WARNING);
log("This is an error", ERROR);
log("This is an info");
