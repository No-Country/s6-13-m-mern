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
        .notEmpty()
        .withMessage('Phone is required')
        .isString()
        .withMessage('Phone must be a string'),
    body('apt')
        .notEmpty()
        .withMessage('Apt is required')
        .isString()
        .withMessage('Apt must be a string'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    },
]
