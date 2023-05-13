import ProductsRouter from './products.router'
import UsersRouter from './users.router'

export default [
    new ProductsRouter().router,
    new UsersRouter().router
]
