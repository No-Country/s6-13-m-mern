import { Router } from 'express'
import { snedMail } from '../controllers'
import { contactValidate } from '../middlewares'

const router = Router()

router.post('/sendEmail', contactValidate, snedMail)
// router.post('/sendEmail', contactValidate, snedMail)

export default router
