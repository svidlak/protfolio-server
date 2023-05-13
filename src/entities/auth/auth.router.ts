import express from 'express'

import {ENTITIES} from '../../utils/constants'
import AuthController from './auth.controller'

class AuthRouter {
    private entity: string
    public router = express.Router()

    constructor(entity: string) {
        this.entity = entity
        this.initBaseRoutes()
    }

    private initBaseRoutes(){
        this.router
            .route(`/${this.entity}`)
            .get(AuthController.getToken)
    }
}

export default new AuthRouter(ENTITIES.AUTH)

