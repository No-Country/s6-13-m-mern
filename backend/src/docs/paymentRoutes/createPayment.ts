export const createPayment = {
    post: {
        tags: ['payment'],
        summary: 'Create a new payment',
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
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            note: {
                                type: 'string',
                                example: 'nota 1',
                            },
                            ammount: {
                                type: 'string',
                                example: '12345',
                            },
                            paymentMethod: {
                                type: 'string',
                                example: 'cash 1 transfer',
                            },
                            image: {
                                type: 'string',
                                example: 'www.urlimagen.com',
                            },
                        },
                    },
                    required: ['note', 'ammount', 'paymentMethod', 'image'],
                },
            },
        },
        responses: {
            '200': {
                description: 'Payment created',
            },
            '401': {
                description: 'User is not active',
            },
            '404': {
                description: 'User not found | Consortium not found',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
