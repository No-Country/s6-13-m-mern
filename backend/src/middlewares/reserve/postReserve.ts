import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
import mongoose from 'mongoose'

export const postReserve = [
  body('user')
    .not().isEmpty().withMessage('User is required')
    .custom((value) => {
      if (mongoose.Types.ObjectId.isValid(value)) {
          if (new mongoose.Types.ObjectId(value).toString() === value) {
              return true
          }
      }
      throw new Error('id user must be an ObjectId')
  }),
  body('startDate')
    .not().isEmpty().withMessage('startDate is required')
    .isDate().withMessage('startDate must be a Date Format'),
  body('endDate')
    .not().isEmpty().withMessage('endDate is required')
    .isDate().withMessage('endDate must be a Date Format'),
  body('status')
    .not().isEmpty().withMessage('Status is required')
    .isString().withMessage('Status must be a string'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(403).json({ ok: false, error: errors.array() })
    }
    return next();
},
]