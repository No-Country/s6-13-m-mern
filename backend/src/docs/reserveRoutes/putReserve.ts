export const putReserve = {
  put: {
    tags: ['reserve'],
    summary: 'Put Reserve',
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
                      user: {
                          type: 'string',
                          example: '01GRHTEM3JW777ZBHGJRRV52H7',
                      },
                      startDate: {
                          type: 'date',
                          example: '2025-01-15',
                      },
                      endDate: {
                          type: 'date',
                          example: '2025-01-16',
                      },
                  },
              },
              required: ['user', 'startDate', 'endDate'],
          },
      },
  },
  responses: {
      '200': {
          description: 'Reserve Edited',
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