import { IPayment } from '../../interfaces'
import Payment from '../../models/Payment'

export const createPaymentService = async (payment: IPayment) => {
    try {
        const creationDate = new Date()
        // console.log(creationDate)
        const newPayment = new Payment({ ...payment, creationDate })
        const response = {
            ok: true,
            status: 200,
            payment: newPayment,
        }
        return response
    } catch (error) {
        // console.log(error)
        return error
    }
}
