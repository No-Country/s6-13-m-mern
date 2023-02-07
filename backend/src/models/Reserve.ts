import { Schema, model, Types } from "mongoose"
import { Reserve } from "../interfaces/reserve"

const reserveSchema = new Schema<Reserve>(
    {
        id: {
            type: Types.ObjectId,
            required: true,
            unique: true
        },
        user: {
            type: String,
            required: true,
            ref: 'User'
        },
        date: {
            type: Date,
            required: true,
        },
      },
    {
        timestamps: true,
        versionKey: false
    }
)
  
const Reserve = model('Reserve', reserveSchema)
export default Reserve