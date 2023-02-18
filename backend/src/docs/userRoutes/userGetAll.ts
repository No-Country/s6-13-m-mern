export const getAllUsers = {
    get: {
        tags: ['user'],
        summary: 'Get all user',
        // description: 'Get all users',
        responses: {
            '200': {
                description: 'successful operation',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/User',
                            },
                        },
                    },
                },
            },
            '404': {
                description: 'There is not any user',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
