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
                description: 'Consortium deleted',
            },
            '401': {
                description: 'User is not the consortium admin',
            },
            '404': {
                description: 'Consortium not found',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
