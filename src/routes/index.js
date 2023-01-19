// gerenciador de exoirtação de todos os routers

const postsRouter = require("./postsRouter.js");

const routes = (app) => {
  app.use(postsRouter);
};

module.exports = routes;
