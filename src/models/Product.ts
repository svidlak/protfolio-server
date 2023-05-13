import {IProduct} from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

class Product {
    private readonly name: string
    private readonly id: string
    private readonly isActive: boolean
    private readonly createdAt: string
    private readonly updatedAt: string

    constructor(props: IProduct) {
        if(!props.id) {
            this.newProduct(props)
        }
        this.id = props.id
        this.name = props.name
        this.isActive = props.isActive
        this.createdAt = props.createdAt
        this.updatedAt = new Date().toISOString()
    }

    private newProduct(props: IProduct): void {
        props.id = uuidv4()
        props.isActive = true
        props.createdAt = new Date().toISOString()
    }

    public serialize(): IProduct {
        return {
            id: this.id,
            isActive: this.isActive,
            name: this.name,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}

export default Product
