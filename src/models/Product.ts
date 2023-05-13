import {IProduct} from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

class Product {
    private readonly name: string
    private readonly id: string
    private readonly isActive: boolean

    constructor(props) {
        this.id = props.id || uuidv4()
        this.name = props.name
        this.isActive = props.isActive === undefined ? true : props.isActive
    }

    public serialize(): IProduct {
        return {
            id: this.id,
            isActive: this.isActive,
            name: this.name
        }
    }
}

export default Product
