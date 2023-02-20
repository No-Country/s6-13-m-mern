export const userDelete = {
    delete: {
        tags: ['user'],
        summary: 'Self delete user',
        security: [
            {
                tokenAuth: [],
            },
        ],
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
        responses: {
            '200': {
                description: 'User Deleted',
            },
            '404': {
                description: 'User not exists',
            },
            '409': {
                description: 'User is already deleted',
            },
            '500': {
                description: 'Server Error',
            },
        },
    },
}
