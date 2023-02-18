export const editUser = {
    put: {
        tags: ['user'],
        summary: 'Edit user',
        security: [
            {
                tokenAuth: [],
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
                            img: {
                                type: 'string',
                                example:
                                    'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
                            },
                        },
                    },
                    required: ['name', 'lastname', 'email', 'img'],
                },
            },
        },
        responses: {
            '200': {
                description: 'User Edited',
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
