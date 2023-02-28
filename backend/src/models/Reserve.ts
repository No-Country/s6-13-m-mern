import { Schema, model, Types } from 'mongoose'
import { IReserve } from '../interfaces/reserve'
import { EReserve } from '../utils'

const reserveSchema = new Schema<IReserve>(
    {
        user: {
            type: Types.ObjectId,
            required: true,
            ref: 'User',
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        startHour: {
            type: String,
            required: true,
        },
        endHour: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: EReserve,
            default: 'reserved',
        },
        amenity: {
            type: Types.ObjectId,
            ref: 'Amenity',
        },
        consortium: {
            type: Types.ObjectId,
            ref: 'Consortium',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Reserve = model('Reserve', reserveSchema)
export default Reserve
