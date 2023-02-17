export const postAmenity = {
  post: {
      tags: ['amenity'],
      summary: 'Post a new Amenity',
      requestBody: {
        content: {
          'application/json': {
              schema: {
                  type: 'object',
                  properties: {
                      name: {
                          type: 'string',
                          example: 'Piscina',
                      },
                      description: {
                          type: 'string',
                          example: 'Descripcion piscina',
                      },
                      reservable: {
                          type: 'boolean',
                          example: 'true',
                      },
                      img: {
                          type: 'string',
                          example: 'pedro_perez@gmail.com',
                      },
                      size: {
                          type: 'string',
                          example: 'https://thumb.img.jpg',
                      },
                      schedule: {
                          type: 'ObjectId',
                          example: '01GRHTEM3JW777ZBHGJRRV52H7',
                      },
                  },
              },
              required: ['name', 'description', 'reservable', 'img', 'size', 'schedule'],
          },
      },
      },
      responses: {
        '200': {
            description: 'Amenity Created',
        },
        '404': {
            description: 'Amenity already Created',
        },
        '500': {
            description: 'Server Error',
        },
    },
  },
}