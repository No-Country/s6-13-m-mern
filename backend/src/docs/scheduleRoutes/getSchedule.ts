export const getSchedule = {
  get: {
    tags: ['schedule'],
    summary: 'Get all Schedule',
    // description: 'Get all Schedule',
    responses: {
        '200': {
            description: 'successful operation',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Schedule',
                        },
                    },
                },
            },
        },
        '404': {
            description: 'There is not any Schedule',
        },
        '500': {
            description: 'Server Error',
        },
    },
},
}