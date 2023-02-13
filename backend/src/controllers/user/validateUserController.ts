import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { validateUserService } from '../../services'

export const validateUserController = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const { ok, status } = (await validateUserService(id)) as IResponse

        //* Comprobar que el mail este registrado
        if (!ok && status === 404) {
            return res
                .status(status)
                .json({ ok: false, msg: 'User dont exists' })
        }

        //* Comprobar que el usuario ya este validado
        if (!ok && status === 409) {
            return res
                .status(status)
                .json({ ok: false, msg: 'User is already validated' })
        }

        return res.status(status).json({
            ok: true,
            msg: 'User validated',
        })
    } catch (error) {
        // console.log({ error })
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
