import {IUser} from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

class User {
    private readonly name: string
    private readonly id: string
    private readonly isActive: boolean
    private readonly lastName: string

    constructor(props: IUser) {
        this.id = props.id || uuidv4()
        this.name = props.name
        this.lastName = props.lastName
        this.isActive = props.isActive === undefined ? true : props.isActive
    }

    public serialize(): IUser {
        return {
            id: this.id,
            isActive: this.isActive,
            lastName: this.lastName,
            name: this.name
        }
    }
}

export default User
