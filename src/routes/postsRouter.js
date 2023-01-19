const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController.js");

router
  .get("/posts", (req, res) => {
    res.send(postsController.postsAll());
  })
  .post("/posts", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    res.send(postsController.newPost(title, description));
  });

module.exports = router;
