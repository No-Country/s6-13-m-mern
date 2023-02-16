import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { validateUserService } from '../../services'
import { jwtGenerate } from '../../utils'
import { sendMail } from '../../utils/sendMail'

export const renewUserToken = async (req: Request, res: Response) => {
    const { id } = req.params

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

        user.token = jwtGenerate(user._id, user.role, '10m')
        const url: string = `${
            process.env.URL_FRONT || 'http://localhost:5173'
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        }/validateAccount/${user._id}/${user.token}`
        const subject: string = 'Active account'
        const message: string = `<p>Click the link below to active your account <a href="${url}">LINK</a></p>`
        await sendMail(user.email, subject, message)

        // user.token = userToken
        await user.save()

        return res.status(status).json({ ok, msg: 'Token updated' })
    } catch (error) {
        // console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
