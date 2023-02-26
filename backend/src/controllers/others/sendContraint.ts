import { Request, Response } from 'express'
import { sendMail } from '../../utils/sendMail'

export const sendContraint = async (req: Request, res: Response) => {
    const { name, apt, email, subject, message } = req.body

    const nombre: string = name
    const correo: string = email
    const appartment: string = apt
    const mensaje: string = message

    const messageBody: string = `<div>
    <p>Name: ${nombre}</p>
    <p>Appartment: ${appartment}</p>
    <p>${mensaje}</p>
    </div>`

    try {
        await sendMail(correo, subject, messageBody)
        return res.status(200).json({ ok: true, msg: 'Constraint mail sended' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, error })
    }
}
