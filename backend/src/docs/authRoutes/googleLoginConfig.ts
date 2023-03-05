export const googleLogin = {
    post: {
        tags: ['auth'],
        summary: 'Google login user',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                example: 'juan',
                            },
                            lastname: {
                                type: 'string',
                                example: 'perez',
                            },
                            picture: {
                                type: 'string',
                                example: 'www.cloudinary.com/asdasd',
                            },
                            email: {
                                type: 'string',
                                example: 'pedro_perez@gmail.com',
                            },
                            sub: {
                                type: 'string',
                                example: 'www.algo.com',
                            },
                        },
                    },
                    required: ['name', 'lastname', 'picture', 'email', 'sub'],
                },
            },
        },
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
        },
    },
}
