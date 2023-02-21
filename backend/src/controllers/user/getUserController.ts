import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getUserService } from '../../services'

export const getUserController = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const { ok, status, user } = (await getUserService({ id })) as IResponse

        //* Comprobar que existe el usuario con el id
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'User not found' })
        }

        //* Comprobar que sea un usuario activo
        if (!ok && status === 401) {
            return res.status(status).json({ ok, msg: 'User is not active' })
        }

        const response = {
            name: user.name,
            lastname: user.lastname,
            mail: user.email,
            phone: user.phone,
            img: user.img,
            role: user.role,
            apt: user.apt,
            consortium: user.consortium,
        }

        return res.status(status).json({ ok, user: response })
    } catch (error) {
        // console.log({ error })
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
