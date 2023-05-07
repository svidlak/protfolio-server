import dotenv from "dotenv"
import App from './app'

dotenv.config();

if (!process.env.PORT) {
    console.log('No port provided')
    process.exit(1);
}

import loggerMiddleware from './middlewares/requestLogger'
import routeNotFound from "./middlewares/routeNotFound";

import HomeController from './controllers/home.controller'

const app = new App({
    port: parseInt(process.env.PORT),
    controllers: [
        new HomeController(),
    ],
    middleWares: [
        loggerMiddleware,
        routeNotFound
    ]
})

app.listen()
