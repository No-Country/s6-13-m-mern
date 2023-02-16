import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const contactValidate = [
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name must be a string'),
    body('email')
        .notEmpty()
        .withMessage('Mail is required')
        .isString()
        .withMessage('Mail must be a string')
        .isEmail()
        .withMessage('Invalid email format'),
    body('subject')
        .notEmpty()
        .withMessage('Subject is required')
        .isString()
        .withMessage('Subject must be a string'),
    body('message')
        .notEmpty()
        .withMessage('Message is required')
        .isString()
        .withMessage('Message must be a string'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
