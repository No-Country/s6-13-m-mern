import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getPaymentByIdService } from '../../services'

export const changePaymentStatus = async (req: Request, res: Response) => {
    const { id } = req.params
    const { pStatus } = req.body
    try {
        const { ok, status, payment } = (await getPaymentByIdService(
            id
        )) as IResponse

        //* Comprobar que existe el payment con el id
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'Payment not found' })
        }

        payment.pStatus = pStatus
        await payment.save()

        return res
            .status(status)
            .json({ ok: true, msg: 'Payment status updated' })
    } catch (error) {
        return res.status(500).json({ ok: false, error })
    }
}
