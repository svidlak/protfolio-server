import {IEntitiesArrayTuple, IEntitiesTuple} from '../interfaces'
import redisDatabase from '../utils/database'
import {ENTITY_MODELS} from '../utils/constants'

class DatabaseService {
    private readonly entity: string

    constructor(entity: string) {
        this.entity = entity
    }

    public async saveEntity(entityBody): Promise<IEntitiesTuple> {
        const entityModel = ENTITY_MODELS[this.entity]
        const entity = (new entityModel(entityBody)).serialize()
        await redisDatabase.saveEntity(this.entity, entity)
        return entity
    }

    public getEntities(): Promise<IEntitiesArrayTuple> {
        return redisDatabase.getEntities(this.entity)
    }

    public getEntityById(id: string): Promise<IEntitiesTuple> {
        return redisDatabase.getEntityById(this.entity, id)
    }

    public deleteEntityById(id: string): Promise<void> {
        return redisDatabase.deleteEntityById(this.entity, id)
    }
}

export default DatabaseService
