export const deleteConsortium = {
    delete: {
        tags: ['consortium'],
        summary: 'Delete consortium',
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
