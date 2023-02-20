import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getUserService } from '../../services'

export const validateUserController = async (req: Request, res: Response) => {
    const { id } = req.params
    const { token } = req

    try {
        const { ok, status, user } = (await getUserService({ id })) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok: false, msg: 'User dont exists' })
        }

        //* Comprobar que el usuario ya este validado
        if (user.isValidated) {
            return res
                .status(409)
                .json({ ok: false, msg: 'User is already validated' })
        }

        //* Comprobar si el token es del usuario
        if (token !== user.token) {
            return res
                .status(401)
                .json({ ok: false, msg: 'Invalid user token' })
        }

        user.token = ''
        user.isValidated = true
        await user.save()

        return res.status(status).json({
            ok: true,
            msg: 'User validated',
        })
    } catch (error) {
        // console.log({ error })
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
