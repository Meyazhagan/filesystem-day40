const express = require("express");

const files = require("./Router/file.router");
const log = require("./Router/log.router");
const logger = require("./Middleware/looger.middleware");
const noEndpoint = require("./Middleware/no-endpoint.middleware");

const app = express();

const port = process.env.PORT || 3300;

app.use(logger.log);

app.use("/files", files);

app.use("/logs", log);

app.use(noEndpoint);

app.listen(port, () => console.log(`Listening to port ${port}`));
