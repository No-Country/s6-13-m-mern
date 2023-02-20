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
                            phone: {
                                type: 'string',
                                example: '1130417805',
                            },
                            img: {
                                type: 'string',
                                example:
                                    'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
                            },
                            apt: {
                                type: 'string',
                                example: '1°A',
                            },
                        },
                    },
                    required: ['name', 'lastname', 'phone', 'img', 'apt'],
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
