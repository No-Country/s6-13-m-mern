export const changePaymentStatus = {
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
                            pStatus: {
                                type: 'string',
                                example: 'validated | denied | pending',
                            },
                        },
                    },
                    required: ['pStatus'],
                },
            },
        },
        responses: {
            '200': {
                description: 'Payment status updated',
            },
            '404': {
                description: 'Payment not found',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
