import { Schema, model, Types } from 'mongoose'
import { IAmenity } from '../interfaces/amenity'

const amenitySchema = new Schema<IAmenity>(
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
        reserve: [{
            type: Types.ObjectId,
            ref: 'Reserve',
        }],
        consortium: {
            type: Types.ObjectId,
            ref: 'Consortium',
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
