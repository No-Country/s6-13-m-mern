export const deleteAmenity = {
  delete: {
    tags: ['amenity'],
    summary: 'Delete Amenity',
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
            description: 'Amenity not found',
        },
        '500': {
            description: 'Server Error',
        },
    },
},
}