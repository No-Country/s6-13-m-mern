import Payment from '../../models/Payment'

export const getUserpaymentsService = async (id: string) => {
    try {
        const payments = await Payment.find()
            .select('-createdAt -updatedAt')
            .populate({ path: 'user', select: 'name lastname email phone img' })

        if (!payments || payments.length < 1) {
            const response = {
                ok: false,
                status: 404,
            }
            return response
        }

        const userPayments = payments.filter(
            (payment: any) => payment.user._id.toString() === id
        )

        return {
            ok: true,
            status: 200,
            payment: userPayments,
        }
    } catch (error) {
        return error
    }
}
