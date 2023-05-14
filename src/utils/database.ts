import Redis from 'ioredis'
// import Redis from 'ioredis-mock'
import {IEntitiesArrayTuple, IEntitiesTuple} from '../interfaces'

class Database {
    private redis: Redis

    constructor() {
        this.redis = new Redis('redis://redis:6379')
    }

    public saveEntity(entityType: string, entity: IEntitiesTuple): Promise<number> {
        return this.redis.hset(entityType, entity.id, JSON.stringify(entity))
    }

    public async getEntities(entityType: string): Promise<IEntitiesArrayTuple> {
        const entities = await this.redis.hgetall(entityType)
        return Object.values(entities).map((entity: string) => JSON.parse(entity))
    }

    public async getEntityById(entityType: string, entityId: string): Promise<IEntitiesTuple> {
        const entity = await this.redis.hget(entityType, entityId)
        return JSON.parse(entity)
    }

    public async deleteEntityById(entityType: string, entityId: string): Promise<void> {
        const entity = await this.getEntityById(entityType, entityId)
        entity.isActive = false
        entity.updatedAt = new Date().toISOString()
        await this.saveEntity(entityType, entity)
    }

    public close(cb): void {
        this.redis.quit(cb)
    }
}

export default new Database()
