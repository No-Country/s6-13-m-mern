import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getUserpaymentsService } from '../../services'

export const getUserPayments = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const { ok, status, payment } = (await getUserpaymentsService(
            id
        )) as IResponse

        //* Comprobar si hay payments
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok, msg: "There isn't any payment" })
        }

        return res.status(status).json({ ok, payments: payment })
    } catch (error) {
        return res.status(500).json({ ok: false, error })
    }
}
