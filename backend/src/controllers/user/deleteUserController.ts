import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { deleteUSerService } from '../../services/user/deleteUserService'

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const { ok, status } = (await deleteUSerService(id)) as IResponse
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'User not exists' })
        }
        return res.status(status).json({ ok, msg: 'User deleted' })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
