import { Request, Response } from 'express'
import { createConsortiumService } from '../../services/consortium'
import { IResponse } from '../../interfaces/response'

export const createConsortium = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const { ok, status, consortium, error } =
            (await createConsortiumService(req.body)) as IResponse

        console.log(ok, error)

        if (!ok) return res.status(400).json({ error })
        return res.status(status).json(consortium)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
}
