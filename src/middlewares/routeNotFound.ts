import {Request, Response} from 'express'

const routeNotFound = (req: Request, res: Response) => res.status(404).send('Route not found, sorry :(')

export default routeNotFound
