const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const postsController = require("../controllers/postsController.js");

router
  .get("/posts", postsController.postsAll)
  .post("/posts", postsController.newPost);

module.exports = router;
