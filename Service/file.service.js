const fs = require("fs");

const date = require("date-and-time");

const getPath = (filename) => {
  let file = filename.split(".");
  filename = `${file[0]}.${file[1] || "txt"}`;

  return `file/${filename}`;
};

module.exports = {
  getOne: async (req, res) => {
    let filename = req.params.filename;
    //reading a file
    await fs.readFile(getPath(filename), (err, file) => {
      if (err) return res.status(404).send({ message: "No Such File Found" });
      res.send({ filename, content: file.toString("utf8"), data: file });
    });
  },

  getAll: async (req, res) => {
    //reading all filename
    await fs.readdir("file", (err, files) => {
      if (err) return res.status(400).send(err.message);
      res.send({ files });
    });
  },

  post: async (req, res) => {
    const timestamp = Date.now();
    const now = new Date(timestamp);
    const formated = date.format(now, "YYYY-MM-DD HH:mm:ss");
    const filename = date.format(now, "YYYYMMDD-HHmmss");
    const content = `${timestamp} - ${formated}`;
    // creating new file with current timestamp
    await fs.writeFile(getPath(filename), content, (err) => {
      if (err) return res.status(400).send(err.message);
      res.send({ message: "File Created", filename: `${filename}.txt` });
    });
  },
};
