import express from 'express'
import {IAppInit, IRoutes} from './interfaces'
import * as http from 'http'
import logger from './utils/logger'
import initSwagger from './utils/swagger'

class App {
    private readonly app: express.Application
    private readonly port: number

    constructor(appInit: IAppInit) {
        this.app = express()
        this.port = appInit.port

        initSwagger(this.app, this.port)
        this.serveClient()
        this.middlewares(appInit.preRouteMiddlewares)
        this.routes(appInit.routesConfig)
        this.middlewares(appInit.postRouteMiddlewares)
    }

    private middlewares(middleWares): void {
        this.app.use(middleWares)
    }

    private routes(routesConfig: IRoutes[]): void {
        routesConfig.forEach(routeConfig => {
            const {prefix, routes} = routeConfig
            this.app.use(prefix, routes)
        })
    }

    private serveClient(): void {
        this.app.use(express.static('public'))
    }

    public listen(): http.Server {
        return this.app.listen(this.port, () => {
            logger.info(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App
