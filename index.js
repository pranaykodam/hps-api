const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { filterValve } = require("./Functions");
require("dotenv").config();

const App = express();
App.use(express.json());
App.use(
  cors({
    origin: "*",
  })
);

// App.get("/", (req, res) =>
//   res.json({
//     status: "Welcome to server",
//   })
// );

const PORT = process.env.PORT || 3000;

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

App.listen(PORT, (req, res) =>
  console.log("Server is running at http://localhost:8000")
);
