import { Router } from 'express'
import { loginController } from '../controllers'
import { loginValidate } from '../middlewares'

const router = Router()

router.post('/login', loginValidate, loginController)

export default router
