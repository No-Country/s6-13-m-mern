import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { loginService } from '../../services'
import { comparePasswords, jwtGenerate } from '../../utils'

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const { ok, status, user, id } = (await loginService(
            email
        )) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok: false, msg: 'Email or password is invalid' })
        }

        //* Comprobar si el mail esta validado
        if (!ok && status === 401) {
            return res
                .status(status)
                .json({ ok: false, msg: 'Unverified email', id, email })
        }

        //* Comprobar que las contraseñas coincidan
        const validPassword = await comparePasswords(password, user.password)
        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Email or password is invalid',
            })
        }

        //* Creacion de jwt
        const token = jwtGenerate(user._id, user.role, '1d')

        return res.status(200).json({
            ok: true,
            token,
            id: user._id,
            role: user.role,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
