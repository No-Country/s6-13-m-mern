import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getUserService } from '../../services'

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const { ok, status, user } = (await getUserService({ id })) as IResponse

        //* Comprobar si existe el usuario
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'User not exists' })
        }

        //* Comprobar si ya esta desactivado
        if (user.status === 'disabled') {
            return res
                .status(409)
                .json({ ok: false, msg: 'User is already deleted' })
        }

        user.status = 'disabled'
        await user.save()

        return res.status(status).json({ ok, msg: 'User deleted' })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
