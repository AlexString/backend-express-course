const express = require('express');

const productsRouter = require('./products.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/api/categories', categoriesRouter);
  router.use('/api/user', userRouter);
}

module.exports = routerApi;
