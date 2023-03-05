export const getUserById = {
    get: {
        tags: ['user'],
        summary: 'Get one user by ID',
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
                description: 'successful operation',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/User',
                        },
                    },
                },
            },
            '401': {
                description: 'User is not active',
            },
            '404': {
                description: 'User not found',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
