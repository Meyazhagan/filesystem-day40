module.exports = (req, res) => {
  res.status(400).send({ message: "No Such Endpoint" });
};
