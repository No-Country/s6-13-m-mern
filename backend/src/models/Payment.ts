import { Schema, model } from 'mongoose'
import { EPaymentMethod, EPaymentStatus, EStatus } from '../utils/enums'
import { IPayment } from '../interfaces'

const paymentSchema = new Schema<IPayment>(
    {
        creationDate: {
            type: Date,
            required: true,
        },
        pStatus: {
            type: String,
            enum: EPaymentStatus,
            default: 'pending',
        },
        note: {
            type: String,
            trim: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        ammount: {
            type: String,
            trim: true,
            required: true,
        },
        paymentMethod: {
            type: String,
            enum: EPaymentMethod,
            required: true,
        },
        image: {
            type: String,
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

const Payment = model('Payment', paymentSchema)
export default Payment
