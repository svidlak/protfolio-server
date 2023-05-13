import BaseController from '../base.controller'
import {ENTITIES} from '../../utils/constants'

class ProductsController extends BaseController {
    constructor(entity) {
        super(entity)
    }
}

export default new ProductsController(ENTITIES.PRODUCTS)
