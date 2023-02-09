import { checkSchema } from 'express-validator'

export const getIdConsortium = checkSchema({
    id: {
        in: ['params'],
        exists: {
            options: {
                checkFalsy: true,
            },
        },
        isString: true,
        toInt: true,
        errorMessage: 'Id invalido',
    },
})
