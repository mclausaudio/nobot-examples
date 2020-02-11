const os = require("os");

const homeDirectory = os.homedir();

console.log("Home directory: ", homeDirectory);

const osPlatform = os.platform();

console.log("OS Playform: ", osPlatform);

const cpuCores = os.cpus();
const coreCount = cpuCores.length;
const cpuModel = cpuCores[0].model;

console.log(`My ${cpuModel} has ${coreCount} cores`);
