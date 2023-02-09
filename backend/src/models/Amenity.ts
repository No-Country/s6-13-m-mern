import { Schema, model, Types } from 'mongoose'
import { Amenity } from '../interfaces/amenity'

const amenitySchema = new Schema<Amenity>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        reservable: {
            type: Boolean,
            default: false,
        },
        size: {
            type: Number,
            required: true,
        },
        schedule: {
            type: Types.ObjectId,
            ref: 'Schedule',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Amenity = model('Amenity', amenitySchema)
export default Amenity
