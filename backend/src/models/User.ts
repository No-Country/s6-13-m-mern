import { Schema, model } from 'mongoose'
import { EStatus } from '../utils/enums'
import { IUser } from '../interfaces'

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isValidated: {
            type: Boolean,
            default: false,
        },
        externalId: {
            type: String,
            default: '',
        },
        status: {
            type: String,
            enum: EStatus,
            default: 'active',
        },
        token: {
            type: String,
            trim: true,
            default: '',
        },
        apt: {
            type: String,
            trim: true,
            default: '',
        },
        consortium: {
            type: Schema.Types.ObjectId,
            ref: 'Consortium',
            default: [],
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export default model('User', userSchema)
