export const editUser = {
    put: {
        tags: ['user'],
        summary: 'Edit user',
        security: [
            {
                apiKeyAuth: [],
            },
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                schema: {
                    type: 'string',
                },
                required: true,
            },
        ],
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
                description: 'User Edited',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                        },
                        example: {
                            ok: true,
                            msg: 'User Edited',
                            user: 'User New Data',
                        },
                    },
                },
            },
            '404': {
                description: 'User not found',
            },
            '400': {
                description: 'Empty id',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
