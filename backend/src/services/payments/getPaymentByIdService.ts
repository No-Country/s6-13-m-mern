import Payment from '../../models/Payment'

export const getPaymentByIdService = async (id: string) => {
    try {
        const payment = await Payment.findById(id).select(
            '-createdAt -updatedAt'
        )

        if (!payment) {
            return {
                ok: false,
                status: 404,
            }
        }

        return {
            ok: true,
            status: 200,
            payment,
        }
    } catch (error) {
        return error
    }
}
