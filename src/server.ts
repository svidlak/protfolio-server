import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()

if (!process.env.PORT) {
    logger.error('No port provided')
    process.exit(1)
}

import App from './app'
import gracefulShutdown from './utils/gracefulShutdown'
import {errorHandler, routeNotFound, requestRateLimit, requestBodyValidator} from './middlewares'

import * as v1Routes from './routes/v1'
import * as v2Routes from './routes/v2'
import authHandler from './middlewares/authMiddleware'
import logger from "./utils/logger";

const app = new App({
    port: parseInt(process.env.PORT),
    routesConfig: [
        { prefix: '/api/v1', routes: v1Routes.default },
        { prefix: '/api/v2', routes: v2Routes.default }
    ],
    preRouteMiddlewares: [
        cors(),
        requestRateLimit,
        authHandler,
        express.json(),
        morgan('short'),
        requestBodyValidator()
    ],
    postRouteMiddlewares: [
        routeNotFound,
        errorHandler
    ]
})

const server: http.Server = app.listen()
gracefulShutdown(server)
