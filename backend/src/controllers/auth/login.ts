import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { loginService } from '../../services'
import { comparePasswords, jwtGenerate } from '../../utils'

const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    // TODO: Mover a un middleware
    if (!email || !password) {
        const error = new Error('Missing values')
        return res.status(400).json({ msg: error.message })
    }
    if (!expression.test(email)) {
        const error = new Error('Invalid email format')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const { ok, msg, status, user, id } = (await loginService(
            email
        )) as IResponse

        //* Comprobar error del servidor
        if (!ok && status === 500) {
            return res.status(status).json({ ok, msg: 'Error del servidor' })
        }

        //* Comprobar que el mail este registrado
        if (!ok && msg === 'El email no esta registrado') {
            return res.status(status).json({ ok: false, msg: msg })
        }

        //* Comprobar si el mail esta validado
        if (!ok && msg === 'El email no esta verificado') {
            return res.status(status).json({ ok: false, msg: msg, id, email })
        }

        //* Comprobar que las contraseñas coincidan
        const validPassword = await comparePasswords(password, user.password)
        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Password Incorrecta',
            })
        }

        //* Creacion de jwt
        const token = await jwtGenerate(user._id, user.isAdmin)

        return res.status(200).json({
            ok: true,
            token,
            id: user._id,
            admin: user.admin,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error, contacta con un administrador',
            error,
        })
    }
}
