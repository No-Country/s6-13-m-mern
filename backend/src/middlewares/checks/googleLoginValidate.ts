import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const googleLoginValidate = [
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format'),
    body('picture')
        .notEmpty()
        .withMessage('Picture is required')
        .isURL()
        .withMessage('Email must be an URL'),
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name must be a string'),
    body('lastname')
        .notEmpty()
        .withMessage('Lastname is required')
        .isString()
        .withMessage('Lastname must be a string'),
    body('sub')
        .notEmpty()
        .withMessage('Sub is required')
        .isString()
        .withMessage('Sub must be a string'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
