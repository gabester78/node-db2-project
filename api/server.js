const express = require("express");
const server = express();
const carsRouter = require("../data/carsRouter.js");

server.use(express.json());
server.use("/cars", carsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>It's alive!!!</h2>`);
});

module.exports = server;
