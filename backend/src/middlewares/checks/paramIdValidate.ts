import mongoose from 'mongoose'
import { Response, Request, NextFunction } from 'express'
import { param, validationResult } from 'express-validator'

export const paramIdValidate = [
    param('id')
        .notEmpty()
        .withMessage('ID param is required')
        .custom((value) => {
            if (mongoose.Types.ObjectId.isValid(value)) {
                if (new mongoose.Types.ObjectId(value).toString() === value) {
                    return true
                }
            }
            throw new Error('id param must be an ObjectId')
        }),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
