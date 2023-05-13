import UsersController from '../../controllers/entities/users.controller'
import {ENTITIES} from '../../utils/constants'
import BaseRouter from "./base.router";

class UsersRouter extends BaseRouter {
    constructor(entity: string) {
        super(entity, UsersController)
    }
}

export default new UsersRouter(ENTITIES.USERS)

