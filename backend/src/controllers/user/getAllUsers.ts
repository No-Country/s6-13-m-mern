import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getAllUsersService } from '../../services'

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const { ok, status, user } = (await getAllUsersService()) as IResponse

        //* Comprobar error del servidor
        if (!ok && status === 500) {
            return res.status(status).json({ ok, msg: 'Server error' })
        }

        //* Comprobar si hay usuarios creados
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: "There isn't any user" })
        }

        return res.status(status).json({ ok, users: user })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
