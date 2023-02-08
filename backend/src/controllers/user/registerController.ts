import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { registerService } from '../../services'
import { hashPassword } from '../../utils'

export const registerController = async (req: Request, res: Response) => {
    const { name, lastname, email, password } = req.body

    try {
        const hPassword = await hashPassword(password)
        const { ok, status } = (await registerService(
            name,
            lastname,
            email,
            hPassword
        )) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 400) {
            return res.status(status).json({ ok, msg: 'Email used' })
        }

        return res.status(status).json({ ok, msg: 'User created' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
