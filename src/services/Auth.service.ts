import jwt from 'jsonwebtoken'

class AuthService {
    private readonly token: any

    constructor() {
        this.token = jwt.sign({user: 'someUser'}, process.env.TOKEN_SECRET)
    }

    get autToken() {
        return this.token
    }
}

export default AuthService
