import { Schema, model } from "mongoose"
import { IReserve } from "../interfaces/reserve"

const reserveSchema = new Schema<IReserve>(
    {
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