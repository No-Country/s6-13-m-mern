import { Router } from 'express'
import { sendContraint, snedMail } from '../controllers'
import {
    constraintValidate,
    contactValidate,
    validateToken,
} from '../middlewares'

const router = Router()

router.post('/sendEmail', contactValidate, snedMail)
router.post('/sendConstraint', validateToken, constraintValidate, sendContraint)

export default router
