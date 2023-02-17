export const getConsortium = {
  get: {
    tags: ['consortium'],
    summary: 'Get user consortium information',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
    responses: {
      '200': {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Consortium'
            }
          }
        }
      },
      '404': {
        description: 'No posee consorcios asociados'
      }
    }
  }
}
