import {NextFunction, Request, Response} from 'express'
import logger from '../utils/logger'

// @ts-ignore:next-line
const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const { message, stack } = error
    logger.error(message)

    if(!res.headersSent) {
        res.status(500).send('Internal server error')
    }
}

export default errorHandler
