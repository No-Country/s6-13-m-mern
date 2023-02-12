import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { forgetPasswordService } from '../../services/auth/forgetPasswordService'
import { sendMail } from '../../utils/sendMail'

export const forgetPasswordController = async (req: Request, res: Response) => {
    const { email } = req.body
    try {
        const { user, status, ok } = (await forgetPasswordService(
            email
        )) as IResponse
        //* Comprobar que el mail este registrado
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok: false, msg: 'User not exists' })
        }

        const url: string = 'http://localhost:3002/doc'
        const subject: string = 'Change Password'
        const message: string = `<p>Click the link below to change your password <a href="${url}">LINK</a></p>`
        await sendMail(user.mail, subject, message)
        return res.json({
            ok,
            msg: 'Mail sended',
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
