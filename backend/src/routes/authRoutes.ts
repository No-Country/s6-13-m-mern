import { Router } from 'express'
import {
    changePasswordController,
    forgetPasswordController,
    googleLoginController,
    loginController,
} from '../controllers'
import {
    loginValidate,
    validateToken,
    changePasswordValidate,
    compareIds,
    googleLoginValidate,
} from '../middlewares'

const router = Router()

router.post('/login', loginValidate, loginController)
router.post('/googleLogin', googleLoginValidate, googleLoginController)
router.post('/forgetPassword', forgetPasswordController)
router.post(
    '/changePassword/:id',
    validateToken,
    compareIds,
    changePasswordValidate,
    changePasswordController
)
export default router
