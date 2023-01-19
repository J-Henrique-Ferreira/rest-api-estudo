const express = require("express");
const postsRouter = require("./postsRouter.js");

const routes = (app) => {
  app.use(postsRouter);
};

module.exports = routes;
