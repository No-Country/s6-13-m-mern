import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { registerService } from '../../services'
import { hashPassword } from '../../utils'
import { sendMail } from '../../utils/sendMail'

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

        const url: string = 'http://localhost:3002/doc'
        const subject: string = 'Active account'
        const message: string = `<p>Click the link below to active your account <a href="${url}">LINK</a></p>`
        await sendMail(email, subject, message)

        return res.status(status).json({ ok, msg: 'User created' })
    } catch (error) {
        // console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
