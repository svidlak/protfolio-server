import product from '../models/Product'
import user from '../models/User'
// import productsController from "../controllers/entities/products.controller";
// import usersController from "../controllers/entities/users.controller";

enum ENTITIES {
    PRODUCTS = 'products',
    USERS = 'users'
}

const ENTITY_MODELS = {
    [ENTITIES.PRODUCTS]: product,
    [ENTITIES.USERS]: user,
}

// const ENTITY_CONTROLLERS = {
//     [ENTITIES.PRODUCTS]: productsController,
//     [ENTITIES.USERS]: usersController,
// }

export {
    ENTITIES,
    ENTITY_MODELS,
    // ENTITY_CONTROLLERS
}
