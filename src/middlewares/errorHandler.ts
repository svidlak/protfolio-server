import {NextFunction, Request, Response} from 'express'
import logger from '../utils/logger'

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const { message, stack } = error
    logger.error(message)

    if(!res.headersSent) {
        if (error.name === 'UnauthorizedError') {
            return res.status(401).send('invalid token...')
        }
        res.status(500).send('Internal server error')
    }
}

export default errorHandler
