import http from 'http'
import logger from './logger'
import Database from './database'

const gracefulShutdown = (server: http.Server): void => {
    ['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach( signal => {
        process.on(signal, () => {
            server.close(() => {
                logger.info('HTTP server is closing...')
                Database.close(() => {
                    logger.info('Database connection is terminated...')
                    logger.info('Bye Bye')
                    process.exit()
                })
            })
        })
    })
}

export default gracefulShutdown
