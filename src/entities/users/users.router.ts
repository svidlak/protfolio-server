import UsersController from './users.controller'
import BaseRouter from '../base.router'
import {ENTITIES} from '../../utils/constants'

class UsersRouter extends BaseRouter {
    constructor(entity: string) {
        super(entity, UsersController)
    }
}

export default new UsersRouter(ENTITIES.USERS)

