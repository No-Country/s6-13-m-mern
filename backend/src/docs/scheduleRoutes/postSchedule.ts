export const postSchedule = {
  post: {
      tags: ['schedule'],
      summary: 'Post a new Schedule',
      requestBody: {
        content: {
          'application/json': {
              schema: {
                  type: 'object',
                  properties: {
                      name: {
                        type: 'string',
                        example: 'schedule01',
                        },
                        reserve: {
                            type: 'ObjectId',
                            example: '01GRHTEM3JW777ZBHGJRRV52H7',
                        }
                  }
                },
              },
              required: ['name', 'reserve'],
          },
      },
      },
      responses: {
        '200': {
            description: 'Schedule Created',
        },
        '404': {
            description: 'Schedule already Created',
        },
        '500': {
            description: 'Server Error',
        },
    },
  }
