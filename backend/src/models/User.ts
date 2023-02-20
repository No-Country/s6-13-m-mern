import { Schema, model } from 'mongoose'
import { ERoles, EStatus } from '../utils/enums'
import { IUser } from '../interfaces'

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        lastname: {
            type: String,
            required: true,
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
        img: {
            type: String,
            default:
                'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
        },
        phone: {
            type: String,
            default: '',
        },
        role: {
            type: String,
            enum: ERoles,
            default: 'user',
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
        consortium: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Consortium',
                default: [],
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const User = model('User', userSchema)
export default User
