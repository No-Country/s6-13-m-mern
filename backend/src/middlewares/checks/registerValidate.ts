import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const registerValidate = [
    body('name').notEmpty().withMessage('Name is required'),
    body('lastname').notEmpty().withMessage('Lastname is required'),
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        console.log(errors)
        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        return next()
    },
]
