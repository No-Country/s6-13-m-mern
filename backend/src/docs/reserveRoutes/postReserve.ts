export const postReserve = {
  post: {
      tags: ['reserve'],
      summary: 'Post a new Reserve',
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
                  }
                },
              },
              required: ['user', 'startDate', 'endDate'],
          },
      },
      },
      responses: {
        '200': {
            description: 'Reserve Created',
        },
        '404': {
            description: 'Reserve already Created',
        },
        '500': {
            description: 'Server Error',
        },
    },
  }
