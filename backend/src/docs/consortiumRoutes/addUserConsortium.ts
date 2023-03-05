export const addUserConsortium = {
    put: {
        tags: ['consortium'],
        summary: 'Add user to consortium',
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
                description: 'Consorcio eliminado',
            },
            '404': {
                description: 'No existe consorcio en esa direccion',
            },
        },
    },
}
