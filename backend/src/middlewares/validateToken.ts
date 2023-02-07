import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { IPayload } from '../interfaces'

export const validateToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header('token')

    try {
        if (token === undefined) {
            return res.status(401).json({
                ok: false,
                msg: 'Not Authorized',
                error: 'Token is missing',
            })
        }

        jwt.verify(token, `${process.env.JWT_SECRET}`) as IPayload

        // req.id = id
        // req.admin = admin

        return next()
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'invalid token',
        })
    }
}
