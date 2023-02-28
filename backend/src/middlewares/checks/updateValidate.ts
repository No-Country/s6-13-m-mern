import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const updateValidate = [
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
    body('img')
        .notEmpty()
        .withMessage('Image is required')
        .isString()
        .withMessage('Image url must be a string'),
    body('phone')
        .optional()
        .custom((value) => {
            if (value) {
                if (isNaN(value)) {
                    throw new Error('phone must be a number')
                }
                if (value < 0) {
                    throw new Error('phone must be a positive number')
                }
                if (value.length < 8) {
                    throw new Error('phone must have at least 8 characters')
                }
            }
            return true
        }),
    body('apt').optional(),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
