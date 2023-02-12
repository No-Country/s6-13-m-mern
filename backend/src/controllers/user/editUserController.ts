import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { edituserService } from '../../services'

export const editUserController = async (req: Request, res: Response) => {
    const { id } = req.params
    // TODO: Mover a un middleware
    if (!id) {
        const error = new Error('Empty id')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const { ok, status, user } = (await edituserService(
            id,
            req.body
        )) as IResponse

        //* Comprobar que existe el usuario con el id
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'User not found' })
        }

        return res.status(status).json({ ok, user, msg: 'User Edited' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
