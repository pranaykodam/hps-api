const express = require("express");
const fs = require("fs");

let rawdata = fs.readFileSync("hps-data.json");
let data = JSON.parse(rawdata);
const App = express();
App.use(express.json());
App.get("/", (req, res) => {
  res.send({ status: true, message: "server is running", data });
});
App.listen(8000, (req, res) =>
  console.log("Server is running at http://localhost:8000")
);
