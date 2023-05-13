import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../swagger.json'
import express from 'express'
import logger from './logger'

function initSwagger(app: express.Application, port: number) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    app.use('*.css', (req, res, next) => {
        res.set('Content-Type', 'text/css');
        next();
    });

    logger.info(`Swagger docs available on http://localhost:${port}/docs`)

}
export default initSwagger
