const express = require("express");
const routes = require("./routes/index.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const options = {
  origin: "http://localhost:4444",
};

const app = express();
app.use(bodyParser.json());
routes(app);

//app.use(cors(options));
app.use("/", express.static(path.join(__dirname, "../public")));

module.exports = app;
