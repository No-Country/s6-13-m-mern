import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const updateConsortiumValidate = [
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name must be a string'),
    body('floor')
        .notEmpty()
        .withMessage('Floor is required')
        .isNumeric()
        .withMessage('Floor must be a number'),
    body('apt')
        .notEmpty()
        .withMessage('Apt is required')
        .isNumeric()
        .withMessage('Apt url must be a number'),
    body('amenities')
        .notEmpty()
        .withMessage('Amenities is required')
        .isArray()
        .withMessage('Amenities must be an array'),
    body('address')
        .notEmpty()
        .withMessage('Address is required')
        .isString()
        .withMessage('Address must be a string'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
