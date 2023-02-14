export const putSchedule = {
  put: {
    tags: ['schedule'],
    summary: 'Put Schedule',
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
              required: ['name', 'reserve'],
          },
      },
  },
  responses: {
      '200': {
          description: 'Schedule Edited',
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