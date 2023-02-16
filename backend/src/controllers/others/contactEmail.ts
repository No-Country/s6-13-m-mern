import { Request, Response } from 'express'
import { sendMail } from '../../utils/sendMail'

export const snedMail = async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body

    const messageBody: string = `<div>
    <p>Name: ${name}</p>
    <p>Mail: ${email}</p>
    <p>${message}</p>
    </div>`

    try {
        await sendMail(process.env.NODEMAILER_MAIL, subject, messageBody)
        return res.status(200).json({ ok: true, msg: 'Email sended' })
    } catch (error) {
        console.log(error)
        return error
    }
}
