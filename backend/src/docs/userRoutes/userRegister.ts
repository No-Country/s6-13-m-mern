export const userRegister = {
    post: {
        tags: ['user'],
        summary: 'Register a new user',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                example: 'Pedro',
                            },
                            lastname: {
                                type: 'string',
                                example: 'Perez',
                            },
                            email: {
                                type: 'string',
                                example: 'pedro_perez@gmail.com',
                            },
                            password: {
                                type: 'string',
                                example: 'contraseña',
                            },
                        },
                    },
                    required: ['name', 'lastname', 'email', 'password'],
                },
            },
        },
        responses: {
            '200': {
                description: 'User created',
            },
            '400': {
                description: 'Email in use',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
