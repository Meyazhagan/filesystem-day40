const { format } = require("date-fns-tz");

module.exports.getTimeContent = () => {
  let zonedDate = new Date();
  const contentPattern = "T - dd/MM/yyyy HH:mm:ss (z)";
  const logPattern = "dd/MM/yyyy HH:mm:ss (z)";
  const dateTimePattern = "dd_MM_yyyy-HH_mm_ss";
  const content = format(zonedDate, {
    timeZone: "Asia/Calcutta",
  });
  const dateTime = format(zonedDate, dateTimePattern, {
    timeZone: "Asia/Calcutta",
  });

  const logTime = format(zonedDate, logPattern, {
    timeZone: "Asia/Calcutta",
  });

  return { content, dateTime, logTime };
};
