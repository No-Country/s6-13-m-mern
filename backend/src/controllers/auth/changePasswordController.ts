import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { validateUserService } from '../../services'
import { hashPassword } from '../../utils'

export const changePasswordController = async (req: Request, res: Response) => {
    const { password } = req.body
    const { id } = req.params
    const { token } = req

    try {
        const { ok, status, user } = (await validateUserService(
            id
        )) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok: false, msg: 'User dont exists' })
        }

        //* Comprobar si el token es del usuario
        if (token !== user.token) {
            return res
                .status(401)
                .json({ ok: false, msg: 'Invalid user token' })
        }

        const hpassword = await hashPassword(password)
        user.password = hpassword
        await user.save()

        return res.status(status).json({
            ok: true,
            msg: 'Password updated',
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
