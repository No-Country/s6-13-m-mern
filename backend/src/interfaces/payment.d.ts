import { Types } from 'mongoose'
import { EPaymentMethod, EPaymentStatus, EStatus } from '../utils/enums'

export interface IPayment {
    _id?: Types.ObjectId | string
    creationDate?: Date
    pStatus?: EPaymentStatus | string
    note: string
    user: Types.ObjectId | string
    ammount: string
    paymentMethod: EPaymentMethod
    image: string
    status?: EStatus | string
}
