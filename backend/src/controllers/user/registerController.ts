import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { registerService } from '../../services'
import { jwtGenerate } from '../../utils'
import { sendMail } from '../../utils/sendMail'

export const registerController = async (req: Request, res: Response) => {
    const { name, lastname, email, password, phone } = req.body
    try {
        const { ok, status, user } = (await registerService({
            name,
            lastname,
            email,
            password,
            phone,
        })) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 400) {
            return res.status(status).json({ ok, msg: 'Email used' })
        }

        const userToken = jwtGenerate(user._id, user.role, '10m')

        const url: string = `${
            process.env.URL_FRONT || 'http://localhost:5173'
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        }/validateAccount/${user._id}/${userToken}`
        const subject: string = 'Active account'
        const message: string = `<p>Click the link below to active your account <a href="${url}">LINK</a></p>`
        await sendMail(email, subject, message)

        user.token = userToken
        await user.save()

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
