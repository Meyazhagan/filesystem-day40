const router = require("express").Router();

const files = require("../Service/file.service");

router.post("/", files.post);

router.get("/", files.getAll);

router.get("/:filename", files.getOne);

module.exports = router;
