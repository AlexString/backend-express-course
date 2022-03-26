const productsRouter = require('./products.router')
const userRouter = require('./user.router')
const categoriesRouter = require('./categories.router')

function routerApi(app){
  app.use('/api/products', productsRouter)
  app.use('/api/user', userRouter)
  app.use('/api/categories', categoriesRouter)
}

module.exports = routerApi
