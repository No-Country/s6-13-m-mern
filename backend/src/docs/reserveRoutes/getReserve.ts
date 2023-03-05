export const getReserve = {
  get: {
    tags: ['reserve'],
    summary: 'Get all Reserve',
    // description: 'Get all Reserve',
    responses: {
        '200': {
            description: 'successful operation',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Reserve',
                        },
                    },
                },
            },
        },
        '404': {
            description: 'There is not any Reserv',
        },
        '500': {
            description: 'Server Error',
        },
    },
},
}