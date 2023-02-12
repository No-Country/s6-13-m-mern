import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const updateValidate = [
    body('name').notEmpty().withMessage('Name is required'),
    body('lastname').notEmpty().withMessage('Lastname is required'),
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format'),
    body('password')
        .not()
        .exists()
        .withMessage('This route dont recibe a password'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
