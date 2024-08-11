// os_sample.js

// Load the 'os' module
const os = require('os');

// Log the CPU architecture
console.log('CPU Architecture:', os.arch());

// Log the operating system platform
console.log('Operating System Platform:', os.platform());

// Log the total system memory in MB
console.log('Total Memory (in MB):', os.totalmem() / (1024 * 1024));

// Log the free system memory in MB
console.log('Free Memory (in MB):', os.freemem() / (1024 * 1024));

// Log the system uptime in minutes
console.log('System Uptime (in minutes):', os.uptime() / 60);

// Log the home directory of the current user
console.log('Home Directory:', os.homedir());

// Log the hostname of the operating system
console.log('Hostname:', os.hostname());
