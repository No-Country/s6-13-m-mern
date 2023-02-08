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
        },
    ],
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    floor: {
        type: Number,
        required: true,
    },
    apt: {
        type: Number,
        required: true,
    },
    amenities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Amenity',
        },
    ],
})

export default model('Consortium', consortiumSchema)
