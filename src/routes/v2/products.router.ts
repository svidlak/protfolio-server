import express from 'express'
import { Request, Response } from 'express'

class ProductsRouter {
    public router = express.Router()

    constructor() {
        this.initBaseRoutes()
    }

    public initBaseRoutes(): void {
        this.router
            .route('/products')
            .get((req: Request, res: Response)=> res.status(200).send('get v2 products'))
            .post((req: Request, res: Response) => res.status(200).send('POST v2 products'))
    }
}

export default ProductsRouter

