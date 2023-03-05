export const createConsortium = {
  post: {
    tags: ['consortium'],
    summary: 'Create a new consortium',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            typle: 'object',
            properties: {
              userId: {
                type: 'string',
                example: '63e32b5022734d39b6c2b528'
              },
              name: {
                type: 'string',
                example: 'Hotel Arenales'
              },
              address: {
                type: 'string',
                example: 'Arenales 1628'
              }
            }
          },
          required: ['userID', 'name', 'address']
        }
      }
    },
    responses: {
      '200': {
        description: 'Consortium created',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Consortium'
            }
          }
        }
      },
      '400': {
        description: 'Ya existe consorcio con misma direccion'
      },
      '404': {
        description: 'Email/Usuario no encontrado'
      }
    }
  }
}
