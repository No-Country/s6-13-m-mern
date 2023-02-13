import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { changePasswordService } from '../../services'
import { hashPassword } from '../../utils'

export const changePasswordController = async (req: Request, res: Response) => {
    const { password } = req.body
    const { id } = req.params

    try {
        const hpassword = await hashPassword(password)
        const { ok, status } = (await changePasswordService(
            id,
            hpassword
        )) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok: false, msg: 'User dont exists' })
        }

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
