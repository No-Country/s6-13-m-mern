export const getConsortiumPayments = {
    post: {
        tags: ['payment'],
        summary: 'Get consortium payments',
        security: [
            {
                tokenAuth: [],
            },
        ],
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
        responses: {
            '200': {
                description: 'successful operation',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/Payment',
                            },
                        },
                    },
                },
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
