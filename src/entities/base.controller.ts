import DatabaseService from '../services/Database.service'
import {NextFunction, Request, Response} from 'express'

class BaseController {
    private databaseService: DatabaseService

    constructor(entity: string) {
        this.databaseService = new DatabaseService(entity)
    }

    public getEntities = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const entities = await this.databaseService.getEntities()
            res.status(200).json(entities)
        } catch (err){
            res.status(404).send('Entity not found')
            next(err)
        }
    }

    public saveEntity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const savedEntity = await this.databaseService.saveEntity(req.body)
            res.status(201).json(savedEntity)
        } catch (err) {
            res.status(400).send('Entity failed to create')
            next(err)
        }
    }

    public getEntityById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const entity = await this.databaseService.getEntityById(req.params.id)
            res.status(200).json(entity)
        } catch (err){
            res.status(404).send('Entity not found')
            next(err)
        }
    }

    public setEntityIdFromRequestParams = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        req.body.id = req.params.id
        next()
    }

    public deleteEntityById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await this.databaseService.deleteEntityById(req.params.id)
            res.status(200).send('Ok')
        } catch (err){
            res.status(400).send('Entity deletion failed')
            next(err)
        }
    }
}

export default BaseController
