import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { getUserService } from '../../services'
import { comparePasswords, jwtGenerate } from '../../utils'

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const { ok, status, user } = (await getUserService({
            mail: email,
        })) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok, msg: 'Email or password is invalid' })
        }

        //* Comprobar que sea un usuario activo
        if (!ok && status === 401) {
            return res.status(status).json({ ok, msg: 'User is not active' })
        }

        //* Comprobar si el mail esta validado
        if (!user.isValidated) {
            return res
                .status(409)
                .json({ ok: false, msg: 'Unverified mail', email })
        }

        //* Comprobar que las contraseñas coincidan
        const validPassword = await comparePasswords(password, user.password)
        if (!validPassword) {
            return res.status(403).json({
                ok: false,
                msg: 'Passwords are different',
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
