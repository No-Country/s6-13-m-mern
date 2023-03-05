export const editConsortium = {
    put: {
        tags: ['consortium'],
        summary: 'Edit consortium',
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
            {
                name: 'consortiumId',
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
                                example: 'Nombre del consorcio',
                            },
                            floor: {
                                type: 'number',
                                example: 10,
                            },
                            address: {
                                type: 'string',
                                example: 'direccion del consorcio 123',
                            },
                            apt: {
                                type: 'number',
                                example: 20,
                            },
                            amenities: {
                                type: 'array',
                                example:
                                    '["63f5253bfc13ae4b1f000c28", "63f5253bfc13ae4b1f000c29"]',
                            },
                        },
                    },
                    required: ['name', 'floor', 'address', 'apt', 'amenities'],
                },
            },
        },
        responses: {
            '200': {
                description: 'User Edited',
            },
            '401': {
                description: 'User is not the consortium admin',
            },
            '404': {
                description: 'Consortium not found',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
