const express = require("express");
const App = express();
App.use(express.json());
App.get("/", (req, res) => {
  res.send({ status: true, message: "server is running" });
});
App.listen(8000, (req, res) =>
  console.log("Server is running at http://localhost:8000")
);
