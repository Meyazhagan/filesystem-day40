const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("Log/logger.txt", (err, file) => {
    if (err) return res.status(404).send({ message: "No Such File Found" });
    const logs = file.toString("utf8").trim().split("\n");
    res.send({ logs });
  });
});

module.exports = router;
