import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const createPaymentValidation = [
    body('image').isURL().withMessage('Image must be an URL'),
    body('note')
        .notEmpty()
        .withMessage('Note is required')
        .isString()
        .withMessage('Note must be a string'),
    body('ammount')
        .notEmpty()
        .withMessage('Ammount is required')
        .isString()
        .withMessage('Ammount must be a string'),
    body('paymentMethod')
        .notEmpty()
        .withMessage('PaymentMethod is required')
        .isString()
        .withMessage('PaymentMethod must be a string'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
