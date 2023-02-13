export const deleteReserve = {
  delete: {
    tags: ['reserve'],
    summary: 'Delete Reserve',
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
                            $ref: '#/components/schemas/Reserve',
                        },
                    },
                },
            },
        },
        '404': {
            description: 'Reserve not found',
        },
        '500': {
            description: 'Server Error',
        },
    },
},
}