import { Request, Response } from 'express'
import { getConsortiumService } from '../../services/consortium'
import { IResponse } from '../../interfaces'

export const getConsortium = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const consortiumRetrieved = (await getConsortiumService(
            id
        )) as IResponse

        const { status } = consortiumRetrieved
        return res.status(status).json(consortiumRetrieved)
    } catch (error) {
        return res.status(500).json({ ok: false, error })
    }
}
