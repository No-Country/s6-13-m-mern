import { Request, Response } from 'express'
import { createConsortiumService } from '../../services/consortium'

export const createConsortium = async (req: Request, res: Response) => {
    try {
        const { ok, status, consortium, error } = await createConsortiumService(
            req.body
        )

        if (!ok) return res.status(400).json({ error })
        return res.status(status).json(consortium)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
}
