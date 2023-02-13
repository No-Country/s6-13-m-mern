import { Router } from 'express'
import {
    changePasswordController,
    forgetPasswordController,
    loginController,
} from '../controllers'
import { loginValidate } from '../middlewares'

const router = Router()

router.post('/login', loginValidate, loginController)
router.post('/forgetPassword', forgetPasswordController)
router.post('/changePassword/:id', changePasswordController)
export default router
