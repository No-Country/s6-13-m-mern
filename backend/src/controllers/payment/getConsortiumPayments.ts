import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getConsortiumService } from '../../services'

export const getConsortiumPayments = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const { ok, status, consortiumRetrieved } = (await getConsortiumService(
            id
        )) as IResponse

        //* Comprobar que existe el consorcio con el id
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'Consortium not found' })
        }

        return res
            .status(status)
            .json({ ok: true, payments: consortiumRetrieved.payments })
    } catch (error) {
        return res.status(500).json({ ok: false, error })
    }
}
