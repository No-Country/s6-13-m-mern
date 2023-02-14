export const changePassword = {
    post: {
        tags: ['auth'],
        summary: 'Change password user',
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
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            password: {
                                type: 'string',
                                example: 'nuevo password',
                            },
                        },
                    },
                    required: ['password'],
                },
            },
        },
        responses: {
            '200': {
                description: 'Password updated',
            },
            '404': {
                description: 'User not exists',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
