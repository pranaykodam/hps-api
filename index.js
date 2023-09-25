const express = require("express");
const App = express();
App.use(express.json());
App.listen(8000, (req, res) =>
  console.log("Server is running at http://localhost:8000")
);
