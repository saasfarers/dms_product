const fs = require('fs');
const path = require('path');
const cron = require('node-cron');


function clearLogFile(logFilePath) {
  fs.stat(logFilePath, (err, stats) => {

    if (stats.size > 0) {
      fs.truncate(logFilePath, 0, (err) => {
        if (err) {
          console.error(`[LogCleaner] Failed to clear ${logFilePath}: ${err.message}`);
        } else {
          console.log(`[LogCleaner] Cleared ${logFilePath} at ${new Date().toISOString()}`);
        }
      });
    }
    
  });
}


function scheduleLogClear() {
    const logFilePath = path.join(__dirname, '../../logs/error.log');
    cron.schedule('0 0 * * 0', () => {
        clearLogFile(logFilePath);
    });
}


module.exports = {
  clearLogFile,
  scheduleLogClear
};
