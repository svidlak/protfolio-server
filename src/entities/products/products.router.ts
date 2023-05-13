import ProductsController from './products.controller'
import BaseRouter from '../base.router'
import {ENTITIES} from '../../utils/constants'

class ProductsRouter extends BaseRouter {
    constructor(entity: string) {
        super(entity, ProductsController)
    }
}

export default new ProductsRouter(ENTITIES.PRODUCTS)

