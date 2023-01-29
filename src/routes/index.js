const postsRouter = require("./postsRouter.js");

const routes = (app) => {
  app.use("/api", postsRouter);
};

module.exports = routes;
