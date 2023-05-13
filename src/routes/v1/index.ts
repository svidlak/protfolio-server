import ProductsRouter from '../../entities/products/products.router'
import UsersRouter from '../../entities/users/users.router'
import AuthRouter from '../../entities/auth/auth.router'

export default [
    ProductsRouter.router,
    UsersRouter.router,
    AuthRouter.router
]
