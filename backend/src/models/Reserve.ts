import { Schema, model, Types } from 'mongoose'
import { IReserve } from '../interfaces/reserve'
import { EStatus } from '../utils'

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

const Reserve = model('Reserve', reserveSchema)
export default Reserve
