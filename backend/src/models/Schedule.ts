import { Schema, model, Types } from "mongoose"
import { Schedule } from "../interfaces/schedule"

const scheduleSchema = new Schema<Schedule>(
    {
        id: {
            type: Types.ObjectId,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        reserve: {
            type: Types.ObjectId,
            ref: 'Reserve'
        },
      },
    {
        timestamps: true,
        versionKey: false
    }
)
  
const Schedule = model('Schedule', scheduleSchema)
export default Schedule