import product from '../models/Product'
import user from '../models/User'

enum ENTITIES {
    PRODUCTS = 'products',
    USERS = 'users'
}

const ENTITY_MODELS = {
    [ENTITIES.PRODUCTS]: product,
    [ENTITIES.USERS]: user,
}

export {
    ENTITIES,
    ENTITY_MODELS
}
