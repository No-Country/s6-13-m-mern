import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
import mongoose from 'mongoose'

export const postAmenity = [
  body('name')
    .not().isEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string'),
  body('description')
    .not().isEmpty().withMessage('Description is required')
    .isString().withMessage('Description must be a string'),
  body('reservable')
    .not().isEmpty().withMessage('Reservable is required')
    .isBoolean().withMessage('Reservable must be a boolean'),
  body('img')
    .isURL().withMessage('Img must be a URL'),
  body('size')
    .not().isEmpty().withMessage('Size is required')
    .isNumeric().withMessage('Size must be a Integer Number'),
  body('consortium')
    .not().isEmpty().withMessage('Consortium is required')
    .custom((value) => {
      if (mongoose.Types.ObjectId.isValid(value)) {
          if (new mongoose.Types.ObjectId(value).toString() === value) {
              return true
          }
      }
      throw new Error('id consortium must be an ObjectId')
  }),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(403).json({ ok: false, error: errors.array() })
    }
    return next();
},
]