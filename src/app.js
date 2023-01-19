const express = require("express");
const routes = require("./routes/index.js");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
routes(app);

module.exports = app;
