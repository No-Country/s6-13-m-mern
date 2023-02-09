import { Schema, model, Types } from 'mongoose'
import { ISchedule } from '../interfaces/schedule'

const scheduleSchema = new Schema<ISchedule>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        reserved: [
            {
                type: Types.ObjectId,
                ref: 'Reserve',
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Schedule = model('Schedule', scheduleSchema)
export default Schedule
