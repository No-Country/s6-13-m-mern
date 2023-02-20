export const deleteUserConsortium = {
    delete: {
        tags: ['consortium'],
        summary: 'Remove user from consortium',
        security: [
            {
                tokenAuth: [],
            },
        ],
        parameters: [
            {
                name: 'consortiumId',
                in: 'path',
                schema: {
                    type: 'string',
                },
                required: true,
            },
            {
              name: 'userId',
              in: 'path',
              schema: {
                  type: 'string',
              },
              required: true,
          },
        ],
        responses: {
            '200': {
                description: 'Usuario eliminado de consorcio',
            },
            '404': {
                description: 'Error al eliminar usuario del consorcio / Error al remover consorcio del usuario',
            },
        },
    },
}
