const fs = require("fs");
const { getTimeContent } = require("../shared/date");

const getPath = (filename) => {
  let [fname, ext] = filename.split(".");
  filename = `${fname}.${ext || "txt"}`;

  return `file/${filename}`;
};

module.exports = {
  getOne: (req, res) => {
    let filename = req.params.filename;
    //reading a file
    fs.readFile(getPath(filename), (err, file) => {
      if (err) return res.status(404).send({ message: "No Such File Found" });
      res.send({ filename, content: file.toString("utf8"), data: file });
    });
  },

  getAll: (req, res) => {
    //reading all filename
    fs.readdir("file", (err, files) => {
      if (err) return res.status(400).send(err.message);
      res.send({ files });
    });
  },

  post: (req, res) => {
    const { content, dateTime: filename } = getTimeContent();
    // creating new file with current timestamp
    fs.writeFile(getPath(filename), content, (err) => {
      if (err) return res.status(400).send(err.message);
      res.send({ message: "File Created", filename: `${filename}.txt` });
    });
  },
};
