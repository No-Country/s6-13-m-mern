export const getUserPayments = {
    post: {
        tags: ['payment'],
        summary: 'Get user payments',
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
                description: 'There isnt any payment',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
