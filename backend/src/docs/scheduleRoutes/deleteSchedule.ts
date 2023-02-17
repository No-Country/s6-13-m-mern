export const deleteSchedule = {
  delete: {
    tags: ['schedule'],
    summary: 'Delete Schedule',
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
            description: 'Schedule not found',
        },
        '500': {
            description: 'Server Error',
        },
    },
},
}