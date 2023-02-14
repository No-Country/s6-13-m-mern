export const forgetPassword = {
    post: {
        tags: ['auth'],
        summary: 'Forget password user',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            email: {
                                type: 'string',
                                example: 'pedro_perez@gmail.com',
                            },
                        },
                    },
                    required: ['email'],
                },
            },
        },
        responses: {
            '200': {
                description: 'Mail sended',
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
