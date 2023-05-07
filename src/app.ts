import express from 'express'
import { createServer } from 'http'
import Websocket from "./services/Websocket";

class App {
    private readonly app: express.Application
    private readonly port: number
    private readonly server: any
    private websocket: any

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.serveClient()
        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)

        this.server = createServer(this.app)
        this.websocket = new Websocket(this.server)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use(controller.router)
        })
    }

    private serveClient() {
        this.app.use(express.static('public'))
    }

    public listen() {
        this.server.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App;
