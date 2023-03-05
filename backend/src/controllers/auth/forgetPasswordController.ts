import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getUserService } from '../../services'
import { jwtGenerate } from '../../utils'
import { sendMail } from '../../utils/sendMail'
import getForgotPasswordEmail from '../../utils/getForgotPasswordEmail'

export const forgetPasswordController = async (req: Request, res: Response) => {
    const { mail } = req.body

    try {
        const { user, status, ok } = (await getUserService({
            mail,
        })) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok: false, msg: 'User not exists' })
        }

        user.token = jwtGenerate(user._id, user.role, '10m')
        const url: string = `${
            process.env.URL_FRONT || 'http://localhost:5173'
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        }/changePassword/${user._id}/${user.token}`
        const subject: string = 'Password Recovery Link'
        const message: string = getForgotPasswordEmail(url)
        await sendMail(user.email, subject, message)

        // user.token = userToken
        await user.save()

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
