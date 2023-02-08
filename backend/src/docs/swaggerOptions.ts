import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'
// OAS3 = Open Api Standard 3

const swaggerDefinition: OAS3Definition = {
    openapi: '3.0.0',
    info: {
        title: 'S.O.S Consortium API',
        version: '1.0.0',
    },
    // urls a donde hacer las consultas (dev, testing, deploy, etc)
    servers: [
        {
            url: 'http://localhost:3002',
        },
    ],
    tags: [
        { name: 'auth', description: 'Everything about auth' },
        { name: 'user', description: 'Everything about users' },
    ],
    paths: {
        '/api/auth/login': {
            post: {
                tags: ['auth'],
                summary: 'Login user',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    email: {
                                        type: 'string',
                                        example: 'pedro_perez@gmail.com',
                                    },
                                    password: {
                                        type: 'string',
                                        example: 'contraseña',
                                    },
                                },
                            },
                            required: ['email', 'password'],
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'successful operation',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/User',
                                },
                            },
                        },
                    },
                    '401': {
                        description: 'Unverified email',
                    },
                    '404': {
                        description: 'Email or password is invalid',
                    },
                    '500': {
                        description: 'Server Error',
                    },
                },
            },
        },
        '/api/user/register': {
            get: {
                tags: ['user'],
                summary: 'Register a new user',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string',
                                        example: 'Pedro',
                                    },
                                    lastname: {
                                        type: 'string',
                                        example: 'Perez',
                                    },
                                    email: {
                                        type: 'string',
                                        example: 'pedro_perez@gmail.com',
                                    },
                                    password: {
                                        type: 'string',
                                        example: 'contraseña',
                                    },
                                },
                            },
                            required: ['name', 'lastname', 'email', 'password'],
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'User created',
                    },
                    '400': {
                        description: 'Email in use',
                    },
                    '500': {
                        description: 'Server Error',
                    },
                },
            },
        },
        '/api/user/getUser/{id}': {
            get: {
                tags: ['user'],
                summary: 'Get one user by ID',
                // description: 'Get an user by ID',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        shema: {
                            type: 'string',
                        },
                    },
                ],
                responses: {
                    '200': {
                        description: 'successful operation',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/User',
                                },
                            },
                        },
                    },
                    '404': {
                        description: 'User not found',
                    },
                    '500': {
                        description: 'Server Error',
                    },
                },
            },
        },
        '/api/user/getAllUsers': {
            get: {
                tags: ['user'],
                summary: 'Get all user',
                // description: 'Get all users',
                responses: {
                    '200': {
                        description: 'successful operation',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/User',
                                    },
                                },
                            },
                        },
                    },
                    '404': {
                        description: 'There is not any user',
                    },
                    '500': {
                        description: 'Server Error',
                    },
                },
            },
        },
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
        schemas: {
            User: {
                type: 'object',
                required: ['name', 'lastname', 'email', 'password'],
                properties: {
                    _id: {
                        type: 'objectId',
                        example: '63e3c74ad9d3c1f613e0dfc7',
                    },
                    name: {
                        type: 'string',
                        example: 'Pedro',
                    },
                    lastname: {
                        type: 'string',
                        example: 'Perez',
                    },
                    email: {
                        type: 'string',
                        example: 'pedro_perez@gmail.com',
                    },
                    password: {
                        type: 'string',
                        example:
                            '$2b$10$tb8Mc6H2D4uvTssHxfQoVuBvHwx7TAwCX1HsnW2PZR4wlwChHGOFq',
                    },
                    isAdmin: {
                        type: 'boolean',
                        example: false,
                    },
                    isValidated: {
                        type: 'boolean',
                        example: false,
                    },
                    externalId: {
                        type: 'string',
                        example: 'asd43sdf342sdf324',
                    },
                    status: {
                        type: 'string',
                        description: ' Order Status',
                        example: 'approved',
                        enum: {
                            placed: 'placed',
                            approved: 'approved',
                            delivered: 'delivered',
                        },
                    },
                    token: {
                        type: 'string',
                        example:
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTNjNzczZDlkM2MxZjYxM2UwZGZjYSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjc1ODcyMzIzLCJleHAiOjE2NzU5NTg3MjN9.L2hGAHarD3zabDlEAO1QD09hbQnvg18pOExSQT8SFb5',
                    },
                    apt: {
                        type: 'string',
                        example: '1 A',
                    },
                    consortium: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Consortium',
                        },
                    },
                },
            },
            Consortium: {
                type: 'object',
                required: ['name', 'adress', 'floor', 'apt'],
                properties: {
                    _id: {
                        type: 'objectId',
                        example: '63e3c74ad9d3c1f613e0dfc7',
                    },
                    name: {
                        type: 'string',
                        example: 'Consorcio 1',
                    },
                    adress: {
                        type: 'string',
                        example: 'Calle Falsa 123',
                    },
                    users: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/User',
                        },
                    },
                    admin: {
                        type: 'objectId',
                        $ref: '#/components/schemas/User',
                    },
                    floor: {
                        type: 'integer',
                        example: 3,
                    },
                    apt: {
                        type: 'integer',
                        example: 10,
                    },
                    amenities: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Amenity',
                        },
                    },
                },
            },
            Amenity: {
                type: 'object',
                required: ['name', 'description', 'size'],
                properties: {
                    _id: {
                        type: 'objectId',
                        example: '63e3c74ad9d3c1f613e0dfc7',
                    },
                    name: {
                        type: 'string',
                        example: 'Amenity 1',
                    },
                    description: {
                        type: 'string',
                        example: 'Descripcion de la amenity',
                    },
                    reservable: {
                        type: 'boolean',
                        $ref: false,
                    },
                    size: {
                        type: 'integer',
                        example: 10,
                    },
                    schedule: {
                        type: 'objectId',
                        $ref: '#/components/schemas/Schedule',
                    },
                },
            },
            Reserve: {
                type: 'object',
                required: ['user', 'date'],
                properties: {
                    _id: {
                        type: 'objectId',
                        example: '63e3c74ad9d3c1f613e0dfc7',
                    },
                    user: {
                        type: 'objectId',
                        $ref: '#/components/schemas/User',
                    },
                    date: {
                        type: 'date-time',
                    },
                },
            },
            Schedule: {
                type: 'object',
                required: ['user'],
                properties: {
                    _id: {
                        type: 'objectId',
                        example: '63e3c74ad9d3c1f613e0dfc7',
                    },
                    name: {
                        type: 'objectId',
                        $ref: '#/components/schemas/User',
                    },
                    reserve: {
                        type: 'objectId',
                        $ref: '#/components/schemas/Reserve',
                    },
                },
            },
        },
    },
}

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
}

export default swaggerJSDoc(swaggerOptions)
