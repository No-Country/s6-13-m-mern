import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { IPayload } from '../interfaces'

export const validateAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //* Recibo por headers el token
    const token = req.header('token')

    try {
        //* Compruebo si llega un token
        if (token === undefined) {
            return res.status(401).json({
                ok: false,
                msg: 'Not Authorized',
                error: 'Token is missing',
            })
        }

        const { role } = jwt.verify(
            token,
            `${process.env.JWT_SECRET || ''}`
        ) as IPayload

        //* Compruebo que sea un admin
        if (role !== 'admin') {
            return res.status(404).json({
                ok: false,
                msg: 'Not Authorized',
                error: 'User is not an admin',
            })
        }

        next()
        return
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'invalid token',
        })
    }
}
