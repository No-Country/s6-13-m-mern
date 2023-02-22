import { Schema, model, Types } from 'mongoose'
import { ISchedule } from '../interfaces/schedule'
import { EStatus } from '../utils/enums'

const scheduleSchema = new Schema<ISchedule>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        reserve: [
            {
                type: Types.ObjectId,
                ref: 'Reserve',
            },
        ],
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

const Schedule = model('Schedule', scheduleSchema)
export default Schedule
