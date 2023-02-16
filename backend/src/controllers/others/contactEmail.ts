import { Request, Response } from 'express'
import { sendMail } from '../../utils/sendMail'

export const snedMail = async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body

    const nombre: string = name
    const correo: string = email
    const mensaje: string = message

    const messageBody: string = `<div>
    <p>Name: ${nombre}</p>
    <p>Mail: ${correo}</p>
    <p>${mensaje}</p>
    </div>`

    try {
        await sendMail(process.env.NODEMAILER_MAIL, subject, messageBody)
        return res.status(200).json({ ok: true, msg: 'Email sended' })
    } catch (error) {
        console.log(error)
        return error
    }
}
