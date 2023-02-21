export const login = {
    post: {
        tags: ['auth'],
        summary: 'Login user',
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
                            password: {
                                type: 'string',
                                example: 'contraseña',
                            },
                        },
                    },
                    required: ['email', 'password'],
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
            '401': {
                description: 'User is not active',
            },
            '404': {
                description: 'Email or password is invalid',
            },
            '409': {
                description: 'Unverified mail',
            },
            '403': {
                description: 'Passwords are different',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
