import swaggerExpressValidator from 'swagger-express-validator'
import swaggerDocument from '../../swagger.json'

const requestBodyValidator = () => {
    const options = {
        schema: swaggerDocument,
        returnRequestErrors: true,
        returnResponseErrors: true,
        validateRequest: true,
        validateResponse: true
    }

    return swaggerExpressValidator(options)
}

export default requestBodyValidator
