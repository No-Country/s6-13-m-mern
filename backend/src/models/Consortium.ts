import { Schema, model } from 'mongoose'
import { IConsortium } from '../interfaces/consortium'

const consortiumSchema = new Schema<IConsortium>({
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
    amenities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Amenity',
            default: [],
        },
    ],
})

export default model('Consortium', consortiumSchema)
