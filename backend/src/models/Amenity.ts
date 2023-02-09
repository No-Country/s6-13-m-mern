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
        img: {
            type: String,
            default:
                'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg',
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
