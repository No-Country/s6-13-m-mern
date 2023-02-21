import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { googleLoginService } from '../../services'
import { jwtGenerate } from '../../utils'

export const googleLoginController = async (req: Request, res: Response) => {
    const { name, lastname, picture, sub, email } = req.body

    try {
        const response = (await googleLoginService(
            name,
            lastname,
            picture,
            sub,
            email
        )) as IResponse

        if (!response.ok) {
            const { user, token } = response
            return res.status(200).json({
                ok: true,
                msg: 'User created and logged',
                id: user._id,
                token,
                google: true,
            })
        }

        const { user } = response
        const token = jwtGenerate(user._id, user.role, '1d')

        return res.status(200).json({
            ok: true,
            msg: 'User logged',
            id: user._id,
            token,
            google: true,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
