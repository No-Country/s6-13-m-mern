import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'

import {
    userRegister,
    getUserById,
    getAllUsers,
    editUser,
    userDelete,
    validateUser,
} from './userRoutes'
import { changePassword, forgetPassword, login } from './authRoutes'
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
    components: {
        securitySchemes: {
            tokenAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'token',
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
                    img: {
                        type: 'string',
                        example:
                            'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
                    },
                    phone: {
                        type: 'string',
                        default: '1122334455',
                    },
                    role: {
                        type: 'string',
                        description: 'user role',
                        example: 'user',
                        enum: {
                            user: 'user',
                            tenant: 'tenant',
                            admin: 'admin',
                        },
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
                        description: 'account status',
                        example: 'active',
                        enum: {
                            active: 'active',
                            disabled: 'disabled',
                            banned: 'banned',
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
                    schedule: {
                        type: 'objectId',
                        $ref: '#/components/schemas/Schedule',
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
                    img: {
                        type: 'string',
                        example:
                            'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg',
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
                    startDate: {
                        type: 'date-time',
                    },
                    endDate: {
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
    tags: [
        { name: 'auth', description: ' All Authentication Endpoints ' },
        { name: 'user', description: 'All User Endpoints' },
    ],
    paths: {
        // *-----------------------------Api auth Routes-----------------------------------------------------------
        //* Login user
        '/api/auth/login': login,

        //* ForgetPassword user
        '/api/auth/forgetPassword': forgetPassword,

        //* ChangePassword user
        '/api/auth/changePassword/{id}': changePassword,

        // *-----------------------------Api user Routes-----------------------------------------------------------

        //* Register user
        '/api/user/register': userRegister,

        //* Validate user
        '/api/user/validate/{id}': validateUser,

        //* Get user by Id
        '/api/user/getUser/{id}': getUserById,

        //* Get all users
        '/api/user/getAllUsers': getAllUsers,

        //* Edit user
        '/api/user/update/{id}': editUser,

        //* Delete user
        '/api/user/delete/{id}': userDelete,

        // TODO Api Amenity Routes

        // TODO Api Reserve Routes

        // TODO Api Schedule Routes
    },
}

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
}

export default swaggerJSDoc(swaggerOptions)
