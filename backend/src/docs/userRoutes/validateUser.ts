export const validateUser = {
    get: {
        tags: ['user'],
        summary: 'Validate one user by ID',
        // description: 'Get an user by ID',
        security: [
            {
                tokenAuth: [],
            },
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                shema: {
                    type: 'string',
                },
            },
        ],
        responses: {
            '200': {
                description: 'User validates',
            },
            '404': {
                description: 'User not exists',
            },
            '409': {
                description: 'User is already validated',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
