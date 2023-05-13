import jwt from 'jsonwebtoken'
import {NextFunction, Request, Response} from 'express'
import logger from '../utils/logger'
const whitelistRoutes = ['/api/v1/auth']

const authHandler = (req: Request, res: Response, next: NextFunction) => {
    if (whitelistRoutes.indexOf(req.url) > -1) return next()

    const token = req.headers['authorization']

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) {
            logger.error(err)
            return res.sendStatus(403)
        }

        req.user = user
        next()
    })
}

export default authHandler
