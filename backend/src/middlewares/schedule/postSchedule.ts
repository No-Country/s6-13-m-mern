import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
import mongoose from 'mongoose'

export const postSchedule = [
  body('name')
    .not().isEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string'),
  body('reserve')
    .not().isEmpty().withMessage('Reserve is required')
    .custom((value) => {
      if (mongoose.Types.ObjectId.isValid(value)) {
          if (new mongoose.Types.ObjectId(value).toString() === value) {
              return true
          }
      }
      throw new Error('id Reserve must be an ObjectId')
  }),
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