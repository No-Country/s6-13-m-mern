import { Schema, model } from 'mongoose'
import { IConsortium } from '../interfaces/consortium'

const consortiumSchema = new Schema<IConsortium>({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    address: {
        type: Schema.Types.String,
        required: true,
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: []
        },
    ],
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    floor: {
        type: Number,
    },
    apt: {
        type: Schema.Types.String,
    },
    schedule: {
        type: Schema.Types.ObjectId,
        ref: 'Schedule',
    },
    amenities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Amenity',
            default: []
        },
    ],
})

export default model('Consortium', consortiumSchema)
