import express from 'express'
import { Request, Response } from 'express'

class UsersRouter {
    public router = express.Router()

    constructor() {
        this.initBaseRoutes()
    }

    public initBaseRoutes(): void {
        this.router
            .route('/users')
            .get((req: Request, res: Response)=> res.status(200).send('get v2 users'))
            .post((req: Request, res: Response) => res.status(200).send('POST v2 users'))
    }
}

export default UsersRouter

