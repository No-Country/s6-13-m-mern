import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'
import { editConsortium } from './consortiumRoutes/editConsortium'

import {
    userRegister,
    getUserById,
    getAllUsers,
    editUser,
    userDelete,
    validateUser,
} from './userRoutes'
import {
    changePassword,
    forgetPassword,
    googleLogin,
    login,
} from './authRoutes'
import {
    getAmenity,
    putAmenity,
    postAmenity,
    deleteAmenity,
} from './amenityRoutes'
import {
    getReserve,
    putReserve,
    postReserve,
    deleteReserve,
} from './reserveRoutes'
import {
    getSchedule,
    putSchedule,
    postSchedule,
    deleteSchedule,
} from './scheduleRoutes'
import {
    createConsortium,
    getConsortium,
    addUserConsortium,
    addAmenityConsortium,
    deleteConsortium,
    deleteUserConsortium,
} from './consortiumRoutes'
import {
    changePaymentStatus,
    createPayment,
    getConsortiumPayments,
    getUserPayments,
} from './paymentRoutes'
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
                    img: {
                        type: 'string',
                        example: 'www.urlImagen.com',
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
                        type: 'number',
                        example: 3,
                    },
                    apt: {
                        type: 'number',
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
                    payments: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Payment',
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
            Payment: {
                type: 'object',
                required: ['user', 'ammount', 'paymentMethod'],
                properties: {
                    _id: {
                        type: 'objectId',
                        example: '63e3c74ad9d3c1f613e0dfc7',
                    },
                    creationDate: {
                        type: 'date-time',
                    },
                    pStatus: {
                        type: 'string',
                        example: 'validated | denied | pending',
                    },
                    note: {
                        type: 'string',
                        example: 'nota 1',
                    },
                    user: {
                        type: 'objectId',
                        $ref: '#/components/schemas/User',
                    },
                    ammount: {
                        type: 'string',
                        example: '12345',
                    },
                    paymentMethod: {
                        type: 'string',
                        example: 'cash | transfer',
                    },
                    image: {
                        type: 'string',
                        example: 'www.urlImagen.com',
                    },
                    status: {
                        type: 'string',
                        example: 'active | disabled | banned',
                    },
                },
            },
        },
    },
    tags: [
        { name: 'auth', description: ' All Authentication Endpoints ' },
        { name: 'user', description: 'All User Endpoints' },
        { name: 'amenity', description: 'All Amenity Endpoints' },
        { name: 'reserve', description: 'All Reserve Endpoints' },
        { name: 'schedule', description: 'All Schedule Endpoints' },
        { name: 'conssortium', description: 'All Consortium Endpoints' },
        { name: 'payment', description: 'All Payment Endpoints' },
    ],
    paths: {
        // *-----------------------------Api auth Routes-----------------------------------------------------------
        //* Login user
        '/api/auth/login': login,

        //* Login user
        '/api/auth/googleLogin': googleLogin,

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

        // *-----------------------------Api amenity Routes-----------------------------------------------------------

        //* Get Amenity
        '/api/amenity/id/{id}': getAmenity,

        //* Put Amenity
        '/api/amenity/put/{id}': putAmenity,

        //* Post Amenity
        '/api/amenity/post': postAmenity,

        //* Get Amenity
        '/api/amenity/delete/{id}': deleteAmenity,

        // *-----------------------------Api reserve Routes-----------------------------------------------------------

        //* Get Reserve
        '/api/reserve/id/{id}': getReserve,

        //* Put Reserve
        '/api/reserve/put/{id}': putReserve,

        //* Post Reserve
        '/api/reserve/post': postReserve,

        //* Get Reserve
        '/api/reserve/delete/{id}': deleteReserve,

        // *-----------------------------Api schedule Routes-----------------------------------------------------------

        //* Get Schedule
        '/api/schedule/id/{id}': getSchedule,

        //* Put Schedule
        '/api/schedule/put/{id}': putSchedule,

        //* Post Schedule
        '/api/schedule/post': postSchedule,

        //* Get Schedule
        '/api/schedule/delete/{id}': deleteSchedule,

        // *-----------------------------Api consortium Routes-----------------------------------------------------------

        //* Create Consortium
        '/api/consortium/create': createConsortium,

        //* Get Consortium by Id
        '/api/consortium/get/{id}': getConsortium,

        //* Add user to consortium
        '/api/consortium/addUser/{consortiumId}/{userId}': addUserConsortium,

        //* Add amenity to consortium
        '/api/consortium/add/{consortiumId}/{amenityId]': addAmenityConsortium,

        //* Edit consortium
        '/api/consortium/editConsortium/{consortiumId}/{id}': editConsortium,

        //* Delete consortium
        '/api/consortium/delete/{consortiumId}/{id}': deleteConsortium,

        //* Remove user from consortium
        '/api/consortium/removeUser/{consortiumId}/{userID}':
            deleteUserConsortium,

        // *-----------------------------Api payment Routes-----------------------------------------------------------

        //* Create payment
        '/api/payment/createPayment/{userid}': createPayment,

        //* Get consortium payments
        '/api/payment/consortiumPayments/{consortiumId}': getConsortiumPayments,

        //* Get user payments
        '/api/payment/getUserPayments/{userId}': getUserPayments,

        //* Put payment pStatus
        '/api/payment/changePaymentStatus/{paymentId}': changePaymentStatus,
    },
}

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
}

export default swaggerJSDoc(swaggerOptions)
