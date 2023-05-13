// Applicative
import IRoutes from './applicative/IRoutes'
import IAppInit from './applicative/IAppInit'
// Entities
import IUser from './entities/IUser'
import IProduct from './entities/IProduct'

type IEntitiesTuple = IUser | IProduct
type IEntitiesArrayTuple = IUser[] | IProduct[]

export {
    IUser,
    IProduct,
    IRoutes,
    IAppInit,
    IEntitiesTuple,
    IEntitiesArrayTuple
}

