const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../../logs');
const logFile = path.join(logDir, 'error.log');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}



const errorHandler = (err, req, res, next) => {
  const errorDetails = `[${new Date().toISOString()}] : ${req.host} - ${req.method} - ${req.originalUrl} - ${err.message}\n`;

  fs.appendFile(logFile, errorDetails, (error) => {
    if (error) console.error('Failed to write to log:', error);
  });

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
};

module.exports = {
    errorHandler
};
