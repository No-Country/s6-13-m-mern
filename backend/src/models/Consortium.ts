import { Schema, model } from 'mongoose'
import { IConsortium } from '../interfaces/consortium'
import { EStatus } from '../utils/enums'

const consortiumSchema = new Schema<IConsortium>(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                default: [],
            },
        ],
        admin: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        floor: {
            type: Number,
            required: true,
        },
        apt: {
            type: Number,
            required: true,
        },
        schedule: {
            type: Schema.Types.ObjectId,
            ref: 'Schedule',
        },
        img: {
            type: String,
            default:
                'https://res.cloudinary.com/dozwd1ssj/image/upload/v1676344376/Card_Home_Admin_omrprw.png',
        },
        amenities: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Amenity',
                default: [],
            },
        ],
        payments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Payment',
                default: [],
            },
        ],
        status: {
            type: String,
            enum: EStatus,
            default: 'active',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
const Consortium = model('Consortium', consortiumSchema)
export default Consortium
