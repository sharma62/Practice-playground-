
const os = require('os');

console.log("---------Basic os info--------------------------");
let osType = os.type()
let arch =os.arch()
let platform = os.platform()

console.log("OS Type: ", osType);
console.log("architecture: ", arch);
console.log("platform: ", platform)

console.log("---------------Memory stats--------------------");
console.log('Total Memory: ', os.totalmem()/(1024*1024*1024)+'GB')
console.log('Total Memory: ', os.freemem()/(1024*1024*1024)+'GB')
console.log("---------------cpu info--------------------------------");
console.log("CPU Architecture: ", os.cpus()[0].model);
console.log("---------------uptime & user--------------------------------");
console.log("System Uptime: ", os.uptime()/(60*60)+' hours');
console.log("User Info: ", os.userInfo());
console.log("---------------Network info--------------------------------");
console.log("Network Interfaces: ", os.networkInterfaces());
console.log("---------------End--------------------------------");

