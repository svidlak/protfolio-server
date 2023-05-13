import BaseController from '../base.controller'
import {ENTITIES} from '../../utils/constants'

class UsersController extends BaseController {
    constructor(entity) {
        super(entity)
    }
}

export default new UsersController(ENTITIES.USERS)
