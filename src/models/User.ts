import {IUser} from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

class User {
    private readonly name: string
    private readonly id: string
    private readonly isActive: boolean
    private readonly lastName: string
    private readonly createdAt: string
    private readonly updatedAt: string

    constructor(props: IUser) {
        if(!props.id) {
            this.newUser(props)
        }
        this.id = props.id
        this.name = props.name
        this.lastName = props.lastName
        this.isActive = props.isActive
        this.createdAt = props.createdAt
        this.updatedAt = new Date().toISOString()
    }

    private newUser(props: IUser): void {
        props.id =  uuidv4()
        props.isActive = true
        props.createdAt = new Date().toISOString()
    }

    public serialize(): IUser {
        return {
            id: this.id,
            isActive: this.isActive,
            lastName: this.lastName,
            name: this.name,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}

export default User
