const fs = require("fs");

const path = require("path");

const dir = path.join(__dirname, "/Log/logger.txt");

module.exports = {
  log: (req, res, next) => {
    const logData = `${req.method} - ${
      req.url
    } - ${new Date().toISOString()}\n`;
    fs.appendFile("Log/logger.txt", logData, (err, file) => {
      if (err) console.log(err);
    });
    next();
  },
};
