const express = require("express");
const fs = require("fs");
const { filterValve } = require("./Functions");

const App = express();
App.use(express.json());

App.get("/", async (req, res) => {
  let rawdata = await fs.readFileSync("hps-data.json");
  let data = await JSON.parse(rawdata);
  res.send({ status: true, message: "server is running", data });
});

App.get("/valve/:id", async (req, res) => {
  console.log("params", req.params);
  const { id } = req.params;
  await filterValve(Number(id));
  let rawdata = await fs.readFileSync("hps-data.json");
  let data = await JSON.parse(rawdata);
  res.send({ status: true, message: "server is running", data });
});

App.listen(8000, (req, res) =>
  console.log("Server is running at http://localhost:8000")
);
