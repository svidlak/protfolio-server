import express from "express";

class BaseRouter {
    private entity: string
    private controller: any

    public router = express.Router()

    constructor(entity: string, controller: any) {
        this.entity = entity
        this.controller = controller

        this.initBaseRoutes()
        this.initRoutesById()
    }

    private initBaseRoutes(): void {
        console.log(this.entity)
        this.router
            .route(`/${this.entity}`)
            .get(this.controller.getEntities)
            .post(this.controller.saveEntity)
    }

    private initRoutesById(): void {
        this.router
            .route(`/${this.entity}/:id`)
            .get(this.controller.getEntityById)
            .put([
                this.controller.setEntityIdFromRequestParams,
                this.controller.saveEntity
            ])
            .delete(this.controller.deleteEntityById)
    }
}

export default BaseRouter
