import AuthService from '../../services/Auth.service'
import {Request, Response} from 'express'

class AuthController {
    private authService: any

    constructor() {
        this.authService = new AuthService()
    }

    public getToken = (req: Request, res: Response) => {
        const token = this.authService.autToken
        res.status(200).send(token)
    }
}

export default new AuthController()
