export const addAmenityConsortium = {
  put: {
      tags: ['consortium'],
      summary: 'Add amenity to consortium',
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
          name: 'amenityId',
          in: 'path',
          schema: {
              type: 'string',
          },
          required: true,
      },
      ],
      responses: {
          '200': {
              description: 'Comodidad agregada al consorcio',
          },
          '404': {
              description: 'Comodidad no encontrada',
          },
          '500': {
              description: 'Error ingresando la comodidad',
          },
      },
  },
}
