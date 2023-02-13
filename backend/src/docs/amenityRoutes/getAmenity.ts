export const getAmenity = {
  get: {
    tags: ['amenity'],
    summary: 'Get all amenity',
    // description: 'Get all amenity',
    responses: {
        '200': {
            description: 'successful operation',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Amenity',
                        },
                    },
                },
            },
        },
        '404': {
            description: 'There is not any amenity',
        },
        '500': {
            description: 'Server Error',
        },
    },
},
}