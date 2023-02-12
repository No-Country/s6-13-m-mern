import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const loginValidate = [
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
