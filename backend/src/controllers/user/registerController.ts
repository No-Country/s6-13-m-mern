import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { registerService } from '../../services'

const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const registerController = async (req: Request, res: Response) => {
    const { username, email, password } = req.body

    // TODO: Mover a un middleware
    if (!username || !email || !password) {
        const error = new Error('Missing values')
        return res.status(400).json({ msg: error.message })
    }
    if (!expression.test(email)) {
        const error = new Error('Invalid email format')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const { ok, status } = (await registerService(
            username,
            email,
            password
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
